import assert from 'node:assert';

function simulateScroll(initialY, p, delta, steps) {
  let y = initialY;
  for (let i = 0; i < steps; i++) {
    y += delta;
    if (y >= 2 * p) {
      y -= p;
    } else if (y < 0.5 * p) {
      y += p;
    }
    assert(y >= 0.5 * p && y < 2 * p, `Scroll position ${y} must remain within bounded safe zone [${0.5*p}, ${2*p}]`);
  }
}

const p = 5216;
simulateScroll(p, p, 100, 1000);
simulateScroll(p, p, -100, 1000);
console.log('[PASS] Bidirectional scroll loop mathematically bounded in both directions');
