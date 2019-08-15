window.addEventListener('keydown', e => {
  const keyEl = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (audio && keyEl) {
    audio.currentTime = 0; // rewind if mid-play
    audio.play();
    el.classList.add('playing');
  }
});

const removeTransition = e => {
  if (e.propertyName !== 'transform') return; // skip if it's not a transform
  e.srcElement.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});
