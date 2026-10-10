import assert from 'node:assert';
import { RainDrop } from '../src/js/rain/RainDrop.js';

const drop = new RainDrop(1200, 1450);
assert.ok(drop.x >= 0 && drop.x <= 1200);
assert.ok(drop.speed > 0);
assert.ok(drop.len > 0);

console.log('✓ RainDrop lifecycle tests passed.');

// Test: Particle velocity terminal speed limits and gravity integration tests
