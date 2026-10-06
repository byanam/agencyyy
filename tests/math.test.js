import assert from 'node:assert';

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function lerp(a, b, t) { return a + (b - a) * t; }

assert.strictEqual(clamp(5, 0, 10), 5);
assert.strictEqual(clamp(-5, 0, 10), 0);
assert.strictEqual(clamp(15, 0, 10), 10);
assert.strictEqual(lerp(0, 100, 0.5), 50);
console.log('[PASS] Math utilities clamp and lerp unit tests passed');
