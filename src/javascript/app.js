
// main slider --------------------------
let mSliderIndex = 1;
showSlidesMain(mSliderIndex);

function plusSlidesMain(n) {
  showSlidesMain(mSliderIndex += n);
}

function currentSlideMain(n) {
  showSlidesMain(mSliderIndex = n);
}

function showSlidesMain(n) {
  var i;
  var slides = document.getElementsByClassName('proj-card');
  if (n > slides.length) {mSliderIndex = 1}
    if (n < 1) {mSliderIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
  slides[mSliderIndex - 1].style.display = 'block';
}
// Js capstone Slider --------------

let JslideIndex = 1;
showSlidesJs(JslideIndex);

function currentSlideJs(n) {
  showSlidesJs(JslideIndex = n);
}

function showSlidesJs(n) {
  var i;
  var slides = document.getElementsByClassName('projSlides0');
  var dots = document.getElementsByClassName('jscapstone-dot');
  if (n > slides.length) {JslideIndex = 1}
    if (n < 1) {JslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[JslideIndex - 1].style.display = 'block';
  dots[JslideIndex - 1].className += ' active';
}


// no-pro modal and Slider --------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('projSlides');
  var dots = document.getElementsByClassName('no-pro-dot');
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

// // Cosplay modal and Slider --------------
let cslideIndex = 1;
showSlidesC(cslideIndex);

function currentSlideC(n) {
  showSlidesC(cslideIndex = n);
}

function showSlidesC(n) {
  var i;
  var slides = document.getElementsByClassName('projSlides2');
  var dots = document.getElementsByClassName('cosplay-dot');
  if (n > slides.length) {cslideIndex = 1}
    if (n < 1) {cslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[cslideIndex - 1].style.display = 'block';
  dots[cslideIndex - 1].className += ' active';
}
// // Consultly modal and Slider --------------
let colideIndex = 1;
showSlidesCo(colideIndex);

function currentSlideCo(n) {
  showSlidesCo(colideIndex = n);
}

function showSlidesCo(n) {
  var i;
  var slides = document.getElementsByClassName('projSlides3');
  var dots = document.getElementsByClassName('consultly-dot');
  if (n > slides.length) {colideIndex = 1}
    if (n < 1) {colideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[colideIndex - 1].style.display = 'block';
  dots[colideIndex - 1].className += ' active';
}

// // Memorize Slider --------------
let melideIndex = 1;
showSlidesMe(melideIndex);

function currentSlideMe(n) {
  showSlidesMe(melideIndex = n);
}

function showSlidesMe(n) {
  var i;
  var slides = document.getElementsByClassName('projSlides4');
  var dots = document.getElementsByClassName('memorize-dot');
  if (n > slides.length) {melideIndex = 1}
    if (n < 1) {melideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[melideIndex - 1].style.display = 'block';
  dots[melideIndex - 1].className += ' active';
}
// // SDP modal and Slider --------------
let sdlideIndex = 1;
showSlidesSd(sdlideIndex);

function currentSlideSd(n) {
  showSlidesSd(sdlideIndex = n);
}

function showSlidesSd(n) {
  var i;
  var slides = document.getElementsByClassName('projSlides5');
  var dots = document.getElementsByClassName('sdp-dot');
  if (n > slides.length) {sdlideIndex = 1}
    if (n < 1) {sdlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[sdlideIndex - 1].style.display = 'block';
  dots[sdlideIndex - 1].className += ' active';
}
// // MusicBot modal and Slider --------------
let mcslideIndex = 1;
showSlidesMS(mcslideIndex);

function currentSlideMs(n) {
  showSlidesMS(mcslideIndex = n);
}

function showSlidesMS(n) {
  var i;
  var slides = document.getElementsByClassName('projSlides6');
  var dots = document.getElementsByClassName('music-dot');
  if (n > slides.length) {mcslideIndex = 1}
    if (n < 1) {mcslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[mcslideIndex - 1].style.display = 'block';
  dots[mcslideIndex - 1].className += ' active';
}

// navbar animation-----------------------

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

hamburger.addEventListener('click', () => {
  menu.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});