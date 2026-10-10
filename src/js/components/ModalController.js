export class ModalController {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
  }

  open(title, description) {
    if (!this.modal) return;
    this.modal.classList.add('is-open');
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('is-open');
  }
}

// Component: Contact form modal lifecycle and focus trapping
