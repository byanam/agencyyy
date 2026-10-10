import { findClosestSectionY } from './controllers/nav.js';
import { calculateSmoothedVelocity, computeCloudDrift } from './effects/clouds.js';
import { RainDropPool } from './rain/particles.js';
import { initModal } from './components/modal.js';
import { formatKolkataTime } from './controllers/ticker.js';
import { checkInfiniteScrollWrap } from './controllers/scroll.js';

export {
  findClosestSectionY,
  calculateSmoothedVelocity,
  computeCloudDrift,
  RainDropPool,
  initModal,
  formatKolkataTime,
  checkInfiniteScrollWrap
};

// Application: Core controller wiring, interaction bindings, and effect pipelines
