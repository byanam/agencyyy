import assert from 'node:assert';
import { UmbrellaCollision } from '../src/js/rain/UmbrellaCollision.js';

// Center hit
const hit = UmbrellaCollision.check(
  { x: 500, y: 320 },
  300,
  500,
  200,
  300,
  100
);
assert.notStrictEqual(hit, null);
assert.strictEqual(hit.x, 500);

// Miss hit outside canopy width
const miss = UmbrellaCollision.check(
  { x: 100, y: 350 },
  340,
  500,
  200,
  300,
  100
);
assert.strictEqual(miss, null);

console.log('✓ Collision unit tests passed.');
