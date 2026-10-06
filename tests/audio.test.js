import assert from 'node:assert';

function testAudioToggle() {
  let isPlaying = false, isMuted = false;
  function toggle() {
    if (isPlaying && !isMuted) {
      isMuted = true;
      isPlaying = false;
    } else {
      isMuted = false;
      isPlaying = true;
    }
  }
  toggle();
  assert.strictEqual(isPlaying, true);
  assert.strictEqual(isMuted, false);
  toggle();
  assert.strictEqual(isPlaying, false);
  assert.strictEqual(isMuted, true);
  console.log('[PASS] Audio toggle state transitions verified');
}

testAudioToggle();
