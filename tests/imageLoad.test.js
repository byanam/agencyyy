import fs from 'node:fs';
import assert from 'node:assert';

const assets = [
  '0b3fd.webp', '0d995.webp', '20b2c.webp', '255d2.webp',
  '57e01.webp', '764ac.webp', '8bc30.webp', 'a4a75.webp',
  'a59cf.webp', 'de02e.webp', 'loader-bg.webp', 'classical.mp3', 'thunder.mp3'
];

assets.forEach(a => {
  const p = `public/assets/${a}`;
  assert(fs.existsSync(p), `Asset ${p} must exist on disk`);
});
console.log(`[PASS] Verified ${assets.length} production assets present in public/assets`);

// Test Suite: WebP image preloading and decode sync assertions
