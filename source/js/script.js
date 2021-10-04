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

//Popup
const buttonOpen = document.querySelector('.header-top__login');
const buttonOpenTablet = document.querySelector('.header-bottom__login');
const buttonClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const body = document.body;

if(buttonOpen) {
  buttonOpen.addEventListener('click', (e) => {
    e.preventDefault();
    formPopup.reset();
    overlay.classList.toggle('overlay--shown');
    popup.classList.toggle('popup--opened');
    body.classList.add('disable-scroll');
  })
};

if(buttonOpenTablet) {
  buttonOpenTablet.addEventListener('click', (e) => {
    e.preventDefault();
    formPopup.reset();
    overlay.classList.toggle('overlay--shown');
    popup.classList.toggle('popup--opened');
    body.classList.add('disable-scroll');
  })
};

if(buttonClose) {
  buttonClose.addEventListener('click', () => {
    overlay.classList.remove('overlay--shown');
    popup.classList.remove('popup--opened');
    body.classList.remove('disable-scroll');
  })
};

document.addEventListener('keydown', (evt) => {
  if(evt.keyCode === 27) {
    overlay.classList.remove('overlay--shown');
    popup.classList.remove('popup--opened');
    body.classList.remove('disable-scroll');
  }
})

if(overlay) {
  overlay.addEventListener('click', (evt) => {
    if (evt.target === overlay) {
      overlay.classList.remove('overlay--shown');
      popup.classList.remove('popup--opened');
      body.classList.remove('disable-scroll');
    }
  });
};

//Отправка формы
const formFooter = document.querySelector('#footer-form');
const formPopup = document.querySelector('#popup-form');
const submitForm = (form) => {
  form.onsubmit = async (e) => {
    e.preventDefault();

    await fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: new FormData(form)
    })

    form.reset();
    overlay.classList.toggle('overlay--shown');
    popup.classList.toggle('popup--opened');
  };
}

submitForm(formFooter);
submitForm(formPopup)

//Local storage
window.addEventListener('DOMContentLoaded', function(){
  const formFooterMail = document.querySelector('#email');
  const formPopupMail = document.querySelector('#popup-email');
  const buttonFooter = document.querySelector('.main-footer__button')
  const buttonPopup = document.querySelector('.popup__button')
  if(buttonFooter) {
    buttonFooter.addEventListener('click', function(){
        localStorage.setItem('footerMail', formFooterMail.value);
    })
  }
  if(buttonPopup) {
    buttonPopup.addEventListener('click', function(){
        localStorage.setItem('popupMail', formPopupMail.value);
    })
  }
})
