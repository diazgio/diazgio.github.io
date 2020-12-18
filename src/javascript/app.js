// no-pro modal and Slider --------------
var pmodal = document.getElementById('no-proModal');
var pbtn = document.getElementById('no-proBtn');
var pspan = document.getElementsByClassName('no-problem-close')[0];

// Get the modal -------------------

// When user clicks on the button, open the modal
pbtn.onclick = function() {
  pmodal.style.display = 'block';
}

// When the user clicks on (x), close the modal
pspan.onclick = function() {
  pmodal.style.display = 'none'
}

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
  var slides = document.getElementsByClassName('no-proSlides');
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

// Cosplay modal and Slider --------------
var cmodal = document.getElementById('cosplayModal');
var cbtn = document.getElementById('cosplayBtn');
var cspan = document.getElementsByClassName('cosplay-close')[0];

// Get the modal -------------------

// When user clicks on the button, open the modal
cbtn.onclick = function() {
  cmodal.style.display = 'block';
}

// When the user clicks on (x), close the modal
cspan.onclick = function() {
  cmodal.style.display = 'none'
}

let cslideIndex = 1;
showSlidesC(cslideIndex);

function plusSlidesC(n) {
  showSlidesC(cslideIndex += n);
}

function currentSlideC(n) {
  showSlidesC(cslideIndex = n);
}

function showSlidesC(n) {
  var i;
  var slides = document.getElementsByClassName('cosplaySlides');
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

// Consultly modal and Slider --------------
var comodal = document.getElementById('consultlyModal');
var cobtn = document.getElementById('consultlyBtn');
var cospan = document.getElementsByClassName('consultly-close')[0];

// Get the modal -------------------

// When user clicks on the button, open the modal
cobtn.onclick = function() {
  comodal.style.display = 'block';
}

// When the user clicks on (x), close the modal
cospan.onclick = function() {
  comodal.style.display = 'none'
}

let coslideIndex = 1;
showSlidesCo(coslideIndex);

function plusSlidesCo(n) {
  showSlidesCo(coslideIndex += n);
}

function currentSlideCo(n) {
  showSlidesCo(coslideIndex = n);
}

function showSlidesCo(n) {
  var i;
  var slides = document.getElementsByClassName('consultlySlides');
  var dots = document.getElementsByClassName('consultly-dot');
  if (n > slides.length) {coslideIndex = 1}
    if (n < 1) {coslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[coslideIndex - 1].style.display = 'block';
  dots[coslideIndex - 1].className += ' active';
}

// Memorize modal and Slider --------------
var memodal = document.getElementById('memorizeModal');
var mebtn = document.getElementById('memoBtn');
var mespan = document.getElementsByClassName('memo-close')[0];

// Get the modal -------------------

// When user clicks on the button, open the modal
mebtn.onclick = function() {
  memodal.style.display = 'block';
}

// When the user clicks on (x), close the modal
mespan.onclick = function() {
  memodal.style.display = 'none'
}

let meslideIndex = 1;
showSlidesM(meslideIndex);

function plusSlidesM(n) {
  showSlidesM(meslideIndex += n);
}

function currentSlideM(n) {
  showSlidesM(meslideIndex = n);
}

function showSlidesM(n) {
  var i;
  var slides = document.getElementsByClassName('memoSlides');
  var dots = document.getElementsByClassName('memo-dot');
  if (n > slides.length) {meslideIndex = 1}
    if (n < 1) {meslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[meslideIndex - 1].style.display = 'block';
  dots[meslideIndex - 1].className += ' active';
}

// SDP modal and Slider --------------
var smodal = document.getElementById('sdpModal');
var sbtn = document.getElementById('sdpBtn');
var sspan = document.getElementsByClassName('sdp-close')[0];

// Get the modal -------------------

// When user clicks on the button, open the modal
sbtn.onclick = function() {
  smodal.style.display = 'block';
}

// When the user clicks on (x), close the modal
sspan.onclick = function() {
  smodal.style.display = 'none'
}

let sslideIndex = 1;
showSlidesS(sslideIndex);

function plusSlidesS(n) {
  showSlidesS(sslideIndex += n);
}

function currentSlideS(n) {
  showSlidesS(sslideIndex = n);
}

function showSlidesS(n) {
  var i;
  var slides = document.getElementsByClassName('sdpSlides');
  var dots = document.getElementsByClassName('sdp-dot');
  if (n > slides.length) {sslideIndex = 1}
    if (n < 1) {sslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[sslideIndex - 1].style.display = 'block';
  dots[sslideIndex - 1].className += ' active';
}

// MusicBot modal and Slider --------------
var bmodal = document.getElementById('musicModal');
var bbtn = document.getElementById('musicBtn');
var bspan = document.getElementsByClassName('music-close')[0];

// Get the modal -------------------

// When user clicks on the button, open the modal
bbtn.onclick = function() {
  bmodal.style.display = 'block';
}

// When the user clicks on (x), close the modal
bspan.onclick = function() {
  bmodal.style.display = 'none'
}

let bslideIndex = 1;
showSlidesB(bslideIndex);

function plusSlidesB(n) {
  showSlidesB(bslideIndex += n);
}

function currentSlideB(n) {
  showSlidesB(bslideIndex = n);
}

function showSlidesB(n) {
  var i;
  var slides = document.getElementsByClassName('musicSlides');
  var dots = document.getElementsByClassName('music-dot');
  if (n > slides.length) {bslideIndex = 1}
    if (n < 1) {bslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
  slides[bslideIndex - 1].style.display = 'block';
  dots[bslideIndex - 1].className += ' active';
}