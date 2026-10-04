import assert from 'node:assert';
import { clamp, lerp } from '../src/js/utils/math.js';

assert.strictEqual(clamp(5, 0, 10), 5);
assert.strictEqual(clamp(-5, 0, 10), 0);
assert.strictEqual(clamp(15, 0, 10), 10);
assert.strictEqual(lerp(0, 100, 0.5), 50);

console.log('✓ Math unit tests passed.');
