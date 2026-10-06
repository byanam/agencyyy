export class AudioController {
  constructor(audioEl) {
    this.audio = audioEl;
    this.isUnlocked = false;
  }
  unlock() {
    if (this.isUnlocked || !this.audio) return;
    this.audio.play().then(() => {
      this.isUnlocked = true;
    }).catch(() => {});
  }
  setMuted(mute) {
    if (this.audio) this.audio.muted = mute;
  }
}
