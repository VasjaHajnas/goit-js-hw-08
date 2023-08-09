import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Vimeo('vimeo-player');

const saveTime = throttle(time => {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

vimeoPlayer.on('timeupdate', event => {
  const currentTime = event.seconds;
  saveTime(currentTime);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    vimeoPlayer.setCurrentTime(savedTime);
  }
});
