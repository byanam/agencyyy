export class ProjectFolders {
  constructor(stageSelector) {
    this.stage = document.querySelector(stageSelector);
  }

  init() {
    if (!this.stage) return;
  }
}

// Component: Interactive 3D portfolio project folder stack
