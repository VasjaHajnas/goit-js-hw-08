import Vimeo from '@vimeo/player';

const vimeoPlayer = new Vimeo('vimeo-player');

vimeoPlayer.on('timeupdate', event => {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    vimeoPlayer.setCurrentTime(savedTime);
  }
});
