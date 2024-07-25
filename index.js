//~ Запуск видеоплеера Start
let videoElements = document.querySelectorAll('video');
let buttonsVideo = document.querySelectorAll('.btn-video')

buttonsVideo.forEach((buttonVideo) => {
  buttonVideo.addEventListener('click', function () {
    videoElements.forEach((videoElem) => {
      if (buttonVideo.dataset.video == videoElem.dataset.video) {
        if (videoElem.paused) {
          videoElem.play();
          buttonVideo.classList.add('video-pause');
          buttonVideo.classList.remove('video-play');
        } else {
          videoElem.pause();
          buttonVideo.classList.remove('video-pause');
          buttonVideo.classList.add('video-play');
        }
      }
    })
  });
});
videoElements.forEach((videoElem) => {
  videoElem.addEventListener('ended', function () {
    buttonsVideo.forEach((buttonVideo) => {
      buttonVideo.currentTime = 0;
      buttonVideo.classList.remove('video-pause');
      buttonVideo.classList.add('video-play');
    })

  }, false);
})


// if (videoElement.paused) {
//   videoElement.play();
//   buttonVideo.classList.add('video-pause');
//   buttonVideo.classList.remove('video-play');
// } else {
//   videoElement.pause();
//   buttonVideo.classList.remove('video-pause');
//   buttonVideo.classList.add('video-play');
// }

// videoElement.addEventListener('ended', function () {
//   buttonVideo.currentTime = 0;
//   buttonVideo.classList.remove('video-pause');
//   buttonVideo.classList.add('video-play');
//   console.log('video finished');
// }, false);




//~ Запуск видеоплеера End

//! Слайдер Start

$(document).ready(function () {
  $('.slider-container').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    touchThreshold: 10,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },

      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });
});

//TODO Аккордион Start
let accordeons = document.querySelectorAll('.accordion-header');
accordeons.forEach(function (accord) {
  accord.addEventListener('click', function (elem) {
    let action = elem.target;
    let currentAccordElem = action.closest('.accordion-header');//определяем текущий бокс
    let currentContent = action.nextElementSibling; // находим скрытый контент
    currentAccordElem.classList.toggle("active"); //присваиваем основному контейнеру флаг активности   
    if (currentAccordElem.classList.contains("active")) {
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      //Обратить внимание чтоб стили были присвоены классу .accordion-collapse
      reachGoal('camp_2024_accord', { block: currentAccordElem.innerText });
    }
    else {
      currentContent.style.maxHeight = 0;
    }
  });
});
//TODO Аккордион End