//~ Запуск видеоплеера Start
let videoElement = document.querySelector('video');
let buttonVideo = document.querySelector('.btn-video')
buttonVideo.addEventListener('click', function () {
  if (videoElement.paused) {
    videoElement.play();
    buttonVideo.classList.add('video-pause');
    buttonVideo.classList.remove('video-play');
  } else {
    videoElement.pause();
    buttonVideo.classList.remove('video-pause');
    buttonVideo.classList.add('video-play');
  }
});
videoElement.addEventListener('ended', function () {
  buttonVideo.currentTime = 0;
  buttonVideo.classList.remove('video-pause');
  buttonVideo.classList.add('video-play');
  console.log('video finished');
}, false);

//~ Запуск видеоплеера End

