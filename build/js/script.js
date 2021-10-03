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

//Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span style="margin-right: 9px; font-size: 16px; line-height: 130%; font-weight: 500; font-family: "Poppins", "Arial", sans-serif;" class="' + currentClass + '"></span>' +
              ' of ' +
              '<span style="margin-left: 9px; font-size: 16px; line-height: 130%; font-weight: 500; font-family: "Poppins", "Arial", sans-serif;" class="' + totalClass + '"></span>';
  }
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span style="font-size: 16px; line-height: 130%; font-weight: 500; font-family: "Poppins", "Arial", sans-serif;" class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span style="font-size: 16px; line-height: 130%; font-weight: 500; font-family: "Poppins", "Arial", sans-serif;" class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span style="font-size: 16px; line-height: 130%; font-weight: 500; font-family: "Poppins", "Arial", sans-serif;" class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }
  }
});

const slider = document.querySelector('.swiper-container');
const mediaQuery = window.matchMedia('(min-width: 1023px)')
if (slider) {
  function handleTabletChange(e) {
    if (e.matches) {
      slider.classList.add('swiper-no-swiping');
      swiper.update();
    } else {
      slider.classList.remove('swiper-no-swiping');
      swiper.update();
    }
  }
  mediaQuery.addListener(handleTabletChange)
  handleTabletChange(mediaQuery)
}

//Аккордеон
const accordeons = document.querySelectorAll('.questions__accordeon');

if (accordeons) {
  accordeons.forEach(el => {
    el.classList.remove('questions__accordeon--nojs');
  })

  accordeons.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = document.querySelector('.questions__accordeon-button');
      const content = document.querySelector('.questions__accordeon-bottom');


      // self.classList.toggle('is-open');
      if (self.classList.contains('is-open')) {
        self.classList.remove('is-open');
      } else {
        for (item of accordeons) {
          item.classList.remove('is-open');
        }
        self.classList.add('is-open');
      }

      if (self.classList.contains('is-open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    });
  });

  accordeons.forEach(el => {
    el.addEventListener('keydown', (e) => {
      if(e.keyCode === 32) {
        const self = e.currentTarget;
        const control = document.querySelector('.questions__accordeon-button');
        const content = document.querySelector('.questions__accordeon-bottom');


        // self.classList.toggle('is-open');
        if (self.classList.contains('is-open')) {
          self.classList.remove('is-open');
        } else {
          for (item of accordeons) {
            item.classList.remove('is-open');
          }
          self.classList.add('is-open');
        }

        if (self.classList.contains('is-open')) {
          control.setAttribute('aria-expanded', true);
          content.setAttribute('aria-hidden', false);
        } else {
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-hidden', true);
        }
      }
    });
  });
}
