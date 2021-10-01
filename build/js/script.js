//Реализация открытия/закрытия меню в шапке и no-js
const header = document.querySelector('.main-header')
const bottomMenu = document.querySelector('.header-bottom');
const topMenu = document.querySelector('.header-top');
const menuBtn = document.querySelector('.header-top__burger');

if(bottomMenu && topMenu && header) {
  bottomMenu.classList.remove('header-bottom--nojs');
  topMenu.classList.remove('header-top--nojs');
  header.classList.remove('main-header--nojs');
}

if(menuBtn) {
  menuBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    topMenu.classList.toggle('open');
    bottomMenu.classList.toggle('open');
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
