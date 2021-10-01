//Реализация открытия/закрытия меню в шапке и no-js
const nav = document.querySelector('.navigation');
const menuBtn = document.querySelector('.main-header__menu');
const menuClose = document.querySelector('.navigation__close');

if(nav) {
  nav.classList.remove('navigation--nojs');
}

if(menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
}

if(menuClose) {
  menuClose.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
}

//Маска для поля tel
let selector = document.getElementById('form-tel');
let im = new Inputmask('+7 (999) 999-99-99');

if(selector) {
  im.mask(selector);
}

//Включение видео
const playButton = document.querySelector('.video__button');

if(playButton) {
  playButton.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.video__video').querySelector('video');
    video.play();
    e.currentTarget.classList.toggle('is-hide');
  });
}

//Закрытие меню при нажатии на ссылку в планшетной и мобильной версиях
const links = document.querySelectorAll('.navigation__link');

if(links) {
  for (let link of links) {
    link.addEventListener ('click', () => {
      nav.classList.remove('is-open');
    })
  }
}


//Отправка формы
const form = document.querySelector('.promo__form');
if(form) {
  form.onsubmit = async (e) => {
    e.preventDefault();

    await fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: new FormData(form)
    })

    form.reset();
  };
}

//Local storage
window.addEventListener('DOMContentLoaded', function(){
  const formTel = document.getElementById('form-tel');
  const formName = document.getElementById('form-name');
  const button = document.querySelector('.form__button')
  if(button) {
    button.addEventListener('click', function(){
        localStorage.setItem('tel', formTel.value);
        localStorage.setItem('name', formName.value);
    })
  }
})
