window.addEventListener('keydown', e => {
  const keyEl = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (audio && keyEl) {
    showPress(keyEl);
    playAudio(audio);
  }
});

const playAudio = audio => {
  audio.currentTime = 0;
  audio.play();
};

const showPress = el => {
  if (!el) return;
  el.classList.add('playing');
  setTimeout(() => {
    el.classList.remove('playing');
  }, 200);
};
