import { execSync } from 'node:child_process';

const suites = [
  'tests/performance.test.js',
  'tests/infiniteLoop.test.js',
  'tests/imageLoad.test.js',
  'tests/modal.test.js',
  'tests/audio.test.js',
  'tests/math.test.js',
  'tests/ticker.test.js',
  'tests/umbrellaCollision.test.js',
  'tests/htmlSemantics.test.js',
  'tests/cssValidity.test.js',
  'tests/assetsIntegrity.test.js'
];

suites.forEach(s => {
  console.log(`Running ${s}...`);
  execSync(`node ${s}`, { stdio: 'inherit' });
});

console.log('\n[ALL 11 TEST SUITES PASSED SUCCESSFULLY]');

// Test Harness: Sequential test suite runner with timing diagnostics
