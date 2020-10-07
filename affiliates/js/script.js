//question tabs
const questionTrigger = document.querySelectorAll('.tabs__question');
questionTrigger.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


//modals
const registrationBtn = document.querySelectorAll('.btn_reg');
registrationBtn.forEach(button => {
  button.addEventListener('click', () => {
    const modals = document.querySelector('.modals');
    const registrationModal = document.querySelector('.modal_registration');
    const body = document.querySelector('body');
    body.classList.add('active');
    modals.classList.add('active');
    registrationModal.classList.add('active');

    const modalClose = document.querySelector('.modal__close');
    modalClose.addEventListener('click', () => {
      body.classList.remove('active');
      modals.classList.remove('active');
      registrationModal.classList.remove('active');
    })
  });
});

const enterBtn = document.querySelectorAll('.btn_enter');
enterBtn.forEach(button => {
  button.addEventListener('click', () => {
    const modals = document.querySelector('.modals');
    const enterModal = document.querySelector('.modal_enter');
    const body = document.querySelector('body');
    body.classList.add('active');
    modals.classList.add('active');
    enterModal.classList.add('active');

    const modalClose = document.querySelectorAll('.modal__close');
    modalClose.forEach(close => {
      close.addEventListener('click', () => {
        body.classList.remove('active');
        modals.classList.remove('active');
        enterModal.classList.remove('active');
      });
    });
  });
});


//get link with parameters
const paramLinks = document.querySelectorAll('.get-link');
if (paramLinks.length > 0) {
  paramLinks.forEach(link => {
    link.setAttribute('href', link.getAttribute('href') + window.location.search);
  });
}

//show password
const showPassword = document.querySelectorAll('.form__pass-show');
const passwordInput = document.querySelectorAll('.form__item_pass > input');

showPassword.forEach(button => {
  button.addEventListener('click', () => {
    passwordInput.forEach(input => {
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    });
  });
});

//Slider
const sliderContainer = document.querySelector('.swiper-container');
const slider = new Swiper(sliderContainer, {
  infinite: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  }
});


function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

