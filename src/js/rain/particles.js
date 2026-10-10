export class RainDropPool {
  constructor(size = 240) {
    this.size = size;
    this.drops = new Array(size).fill(null).map(() => ({
      x: 0, y: 0, sy: 0, v: 720, len: 24, a: 0.5, hit: false
    }));
  }
  get(i) {
    return this.drops[i];
  }
}

// Rain Engine: Recycled particle object pool eliminating garbage collection
