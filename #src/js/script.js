//question tabs
const questionTrigger = document.querySelectorAll('.tabs__question');
questionTrigger.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


//modals
const registrationBtn = document.querySelectorAll('.btn_reg-open');
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

showPassword.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    buttonParent = button.parentElement;
    passwordInput = buttonParent.querySelector('input');

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
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



@@include('validate.js')

@@include('webpSupport.js')

