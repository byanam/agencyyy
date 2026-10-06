import assert from 'node:assert';

function isInsideUmbrella(px, py, cx, cy, rx, ry) {
  const dx = (px - cx) / rx;
  const dy = (py - cy) / ry;
  return (dx * dx + dy * dy) <= 1.0;
}

assert.strictEqual(isInsideUmbrella(100, 100, 100, 100, 50, 50), true);
assert.strictEqual(isInsideUmbrella(200, 200, 100, 100, 50, 50), false);
console.log('[PASS] Umbrella ellipse collision boundary mathematics passed');
