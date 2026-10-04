export class ServicesAccordion {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
  }

  init() {
    if (!this.container) return;
  }
}
