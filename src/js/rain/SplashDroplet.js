export class SplashDroplet {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.alpha = 0.9;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.3; // Gravity
    this.alpha -= 0.04;
    return this.alpha > 0;
  }
}
