import { spawn } from 'node:child_process';
import { watch } from 'node:fs';
import process from 'node:process';

const COLORS = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

const WATCH_TARGETS = [
  'index.html',
  'styles.css',
  'projects.html',
  'contacts.html',
  'tests/index.test.js',
  'package.json',
];

let runNumber = 0;
let isRunning = false;
let rerunRequested = false;
let debounceTimer = null;

function colorize(color, text) {
  return `${COLORS[color]}${text}${COLORS.reset}`;
}

function printDivider() {
  console.log(colorize('dim', '------------------------------------------------------------'));
}

function printHeading(text, color) {
  printDivider();
  console.log(colorize(color, text));
  printDivider();
}

function runCommand(label, command, args) {
  return new Promise(resolve => {
    const child = spawn(command, args, {
      stdio: ['ignore', 'pipe', 'pipe'],
      env: {
        ...process.env,
        FORCE_COLOR: '1',
      },
    });

    let output = '';

    child.stdout.on('data', chunk => {
      output += chunk.toString();
    });

    child.stderr.on('data', chunk => {
      output += chunk.toString();
    });

    child.on('close', code => {
      resolve({
        code: code ?? 1,
        label,
        output: output.trim(),
      });
    });
  });
}

async function executeChecks(reason) {
  if (isRunning) {
    rerunRequested = true;
    return;
  }

  isRunning = true;
  runNumber += 1;

  printHeading(`Checking exercise status (#${runNumber})`, 'cyan');
  console.log(colorize('dim', `Reason: ${reason}`));

  const tests = await runCommand('Vitest', 'node', ['./node_modules/vitest/vitest.mjs', 'run', '--reporter=verbose']);

  if (tests.code !== 0) {
    printHeading('TEST FAILURES', 'red');
    console.log(tests.output || colorize('red', 'Vitest failed without output.'));
    printHeading('ASSIGNMENT STATUS: NOT COMPLETED', 'red');
    console.log(colorize('yellow', 'Fix the errors above and save the file to run checks again.'));
  } else {
    console.log(tests.output);
    printHeading('ASSIGNMENT STATUS: COMPLETED', 'green');
    console.log(colorize('green', 'All tests passed. The exercise is done!'));
  }

  isRunning = false;

  if (rerunRequested) {
    rerunRequested = false;
    void executeChecks('queued file change');
  }
}

function scheduleChecks(reason) {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  debounceTimer = setTimeout(() => {
    debounceTimer = null;
    void executeChecks(reason);
  }, 300);
}

// Start Vite dev server in background (for browser preview)
const vite = spawn('node', ['./node_modules/vite/bin/vite.js', '--host', '0.0.0.0'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  env: { ...process.env },
});

// Wait for Vite to be ready, then start test runner
let viteReady = false;

vite.stdout.on('data', chunk => {
  const text = chunk.toString();
  process.stdout.write(text);
  if (!viteReady && text.includes('ready in')) {
    viteReady = true;
    console.log('');
    startTestRunner();
  }
});

vite.stderr.on('data', chunk => {
  process.stderr.write(chunk);
});

vite.on('close', code => {
  if (code) console.log(colorize('red', `Vite exited with code ${code}`));
});

function startTestRunner() {
  console.log(colorize('cyan', 'Exercise status runner started.'));
  console.log(colorize('dim', `Watching: ${WATCH_TARGETS.join(', ')}`));
  console.log(colorize('dim', 'Edit your HTML/CSS files and save — tests re-run automatically.\n'));

  for (const target of WATCH_TARGETS) {
    try {
      watch(target, () => {
        scheduleChecks(`change in ${target}`);
      });
    } catch {
      // Ignore missing optional targets.
    }
  }

  void executeChecks('initial run');
}
