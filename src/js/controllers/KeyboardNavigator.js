export class KeyboardNavigator {
  static init(onEscape) {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && typeof onEscape === 'function') {
        onEscape();
      }
    });
  }
}

// Controller: Keyboard accessible navigation and section jump controls
