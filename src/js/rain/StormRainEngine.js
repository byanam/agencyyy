import { RainDrop } from './RainDrop.js';
import { CanopyRipple } from './CanopyRipple.js';
import { SplashDroplet } from './SplashDroplet.js';
import { UmbrellaCollision } from './UmbrellaCollision.js';

export class StormRainEngine {
  constructor(canvasId, umbrellaId, dropCount = 130) {
    this.canvas = document.getElementById(canvasId);
    this.umbrella = document.getElementById(umbrellaId);
    this.dropCount = dropCount;
    this.drops = [];
    this.ripples = [];
    this.splashes = [];
  }
}

// Rain Engine: Dynamic storm cycle manager and particle allocation pool
