export function initModal(modalEl, closeBtnEl) {
  function open() {
    document.body.classList.add('rc-open');
    modalEl.classList.add('open');
    modalEl.setAttribute('aria-hidden', 'false');
  }
  function close() {
    document.body.classList.remove('rc-open');
    modalEl.classList.remove('open');
    modalEl.setAttribute('aria-hidden', 'true');
  }
  if (closeBtnEl) {
    closeBtnEl.addEventListener('click', (e) => {
      e.stopPropagation();
      close();
    });
  }
  return { open, close };
}
