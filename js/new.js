const validationForm = document.querySelector('.presentation__form');

validationForm.addEventListener('submit', (evt) => {
   evt.preventDefault();
   const form = evt.target;
   const input = form.querySelector('.presentation__form-input');
   input.classList.remove('error');
   const value = input.value;
   if(value.length < 5){
      input.classList.add('error');
   }
});

var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
   var scrolled = window.pageYOffset;
   var coords = document.documentElement.clientHeight;

   if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
   }
   if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
   }
}

function backToTop() {
   if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
   }
}

const openBtn =  document.querySelector('.header__bottom-link');
openBtn.addEventListener('click', (evt) => {
   const popup = document.querySelector('.popup');
   popup.classList.add('show');
   document.body.style.overflow = 'hidden';
})

const popupCloseBtn = document.querySelector('.popup__close');
popupCloseBtn.addEventListener('click', (evt) => {
   const popup = evt.target.closest('.popup');
   popup.classList.remove('show');
   document.body.style.overflow = 'auto';
})