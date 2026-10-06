export class SplashPool {
  constructor(maxSize = 120) {
    this.maxSize = maxSize;
    this.splashes = [];
  }
  add(splash) {
    if (this.splashes.length >= this.maxSize) {
      this.splashes.shift();
    }
    this.splashes.push(splash);
  }
  all() {
    return this.splashes;
  }
}
