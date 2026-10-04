import { StormRainEngine } from './rain/StormRainEngine.js';
import { LightningEngine } from './effects/LightningEngine.js';
import { InfiniteScrollLoop } from './controllers/InfiniteScrollLoop.js';
import { KeyboardNavigator } from './controllers/KeyboardNavigator.js';

document.addEventListener('DOMContentLoaded', () => {
  const loop = new InfiniteScrollLoop();
  loop.init();
});
