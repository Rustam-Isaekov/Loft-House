const navBtn = document.querySelector('.nav-btn');
const navContent = document.querySelector('.header__nav');

navBtn.addEventListener('click', function() {
   navBtn.classList.toggle('active');
   navContent.classList.toggle('open');
   document.querySelector('body').classList.toggle('no-scroll');
})

/* Phone Mask */
var element = document.getElementById('input-mask-cta');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

var element = document.getElementById('input-mask-feedback');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);