export class LightningEngine {
  constructor(elementId) {
    this.el = document.getElementById(elementId);
    this.alpha = 0;
    this.target = 0;
  }

  trigger() {
    this.target = Math.random() * 0.7 + 0.3;
    setTimeout(() => {
      this.target = 0.05;
      setTimeout(() => {
        this.target = Math.random() * 0.95 + 0.05;
        setTimeout(() => {
          this.target = 0;
        }, 80);
      }, 60);
    }, 90);
  }
}
