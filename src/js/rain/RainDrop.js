export class RainDrop {
  constructor(w, h) {
    this.reset(w, h, true);
  }

  reset(w, h, initial = false) {
    this.x = Math.random() * (w || 1200);
    this.y = initial ? Math.random() * (h || 1450) : Math.random() * ((h || 1450) * 0.15);
    this.speed = Math.random() * 9 + 15;
    this.len = Math.random() * 20 + 16;
    this.width = Math.random() * 0.8 + 0.8;
    this.alpha = Math.random() * 0.45 + 0.35;
  }
}
