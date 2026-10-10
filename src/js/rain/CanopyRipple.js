export class CanopyRipple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1.5;
    this.alpha = 0.85;
  }

  update() {
    this.r += 0.8;
    this.alpha -= 0.035;
    return this.alpha > 0;
  }
}

// Rain Engine: Water film sheet flow and surface tension runoffs
