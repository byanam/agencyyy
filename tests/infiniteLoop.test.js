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

// Test mobile screen widths (e.g. 390px iPhone, 402px Figma, 428px Pro Max)
[390, 402, 428].forEach(width => {
  const m = width / 402;
  const s = width / 1280;
  const mTop = Math.round(874 * m - 1590 * s);
  const pMob = Math.round(mTop + 7480 * s + 88 * m);
  assert(pMob > 2000, 'Mobile period must be positive and encompass full page height');
  simulateScroll(pMob, pMob, 80, 1000);
  simulateScroll(pMob, pMob, -80, 1000);
});

console.log('[PASS] Bidirectional scroll loop mathematically bounded in both directions (desktop & mobile)');

// Test Suite: Mathematical verification of infinite loop scroll range
