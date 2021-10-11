if(document) {
  document.onkeydown = function(e){
    if (e.keyCode == 32) e.preventDefault();
  };
}

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

const accordeonsFilterTop = document.querySelectorAll('.filter__accordeon-top');
const accordeonsFilterBottom = document.querySelectorAll('.filter__accordeon-bottom');

if (accordeonsFilterTop && accordeonsFilterBottom) {
  accordeonsFilterTop.forEach(el => {
    el.classList.remove('filter__accordeon-top--nojs');
  })

  accordeonsFilterBottom.forEach(el => {
    el.classList.remove('filter__accordeon-bottom--nojs');
  })

  accordeonsFilterTop.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = document.querySelector('.filter__accordeon-button');
      const content = document.querySelector('.filter__accordeon-bottom');
      // self.classList.toggle('is-open');
      if (self.classList.contains('is-open')) {
        self.classList.remove('is-open');
        self.nextElementSibling.classList.remove('is-open');
      } else {
        self.classList.add('is-open');
        self.nextElementSibling.classList.add('is-open');
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

  // accordeonsFilterBottom.forEach(el => {
  //   el.addEventListener('click', (e) => {
  //     const self = e.currentTarget;
  //     const control = document.querySelector('.filter__accordeon-button');
  //     const content = document.querySelector('.filter__accordeon-bottom');
  //     // self.classList.toggle('is-open');
  //       self.classList.remove('is-open');
  //       self.previousElementSibling.classList.remove('is-open');

  //     if (self.classList.contains('is-open')) {
  //       control.setAttribute('aria-expanded', true);
  //       content.setAttribute('aria-hidden', false);
  //     } else {
  //       control.setAttribute('aria-expanded', false);
  //       content.setAttribute('aria-hidden', true);
  //     }
  //   });
  // });

  accordeonsFilterTop.forEach(el => {
    el.addEventListener('keydown', (e) => {
      if(e.keyCode === 32) {
        console.log('g')
        const self = e.currentTarget;
        const control = document.querySelector('.filter__accordeon-button');
        const content = document.querySelector('.filter__accordeon-bottom');
        // self.classList.toggle('is-open');
        if (self.classList.contains('is-open')) {
          self.classList.remove('is-open');
          self.nextElementSibling.classList.remove('is-open');
        } else {
          self.classList.add('is-open');
          self.nextElementSibling.classList.add('is-open');
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

buttonClose.addEventListener("blur", function() {
  overlay.classList.remove('overlay--shown');
  popup.classList.remove('popup--opened');
  body.classList.remove('disable-scroll');
});

const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(el => {
  el.addEventListener('keydown', (e) => {
    if(e.keyCode === 32) {
      if(el.checked) {
        el.checked = false;
      } else {
        el.checked = true;
      }
    }
  });
});

//Отправка формы
const formFooter = document.querySelector('#footer-form');
const formPopup = document.querySelector('#popup-form');
const formFilter = document.querySelector('#filter-form');
const formPopupFilter = document.querySelector('#filter-modal-form');
const submitFormPopup = (form) => {
  form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: new FormData(form)
    })


    let result = await response.json();

    alert(result);

    form.reset();
    overlay.classList.toggle('overlay--shown');
    popup.classList.toggle('popup--opened');
  };
}

const submitForm = (form) => {
  form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: new FormData(form)
    })

    let result = await response.json();

    alert(result.message);

    form.reset();
    filterOverlay.classList.remove('filter-overlay--shown');
    filter.classList.remove('filter--opened');
  };
}

const submitFormFooter = (form) => {
  form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: new FormData(form)
    })

    let result = await response.json();

    alert(result.message);

    form.reset();
  };
}

if (formFooter) {
  submitFormFooter(formFooter);
}

if (formPopup) {
  submitFormPopup(formPopup);
}

if (formFilter) {
  submitForm(formFilter);
}

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

//Set focus
const element = document.querySelector('#popup-email');
if(element) {
  buttonOpen.addEventListener('click', () => {
    element.focus();
  });
  buttonOpenTablet.addEventListener('click', () => {
    element.focus();
  });
};


//Filter
const filterOpen = document.querySelector('.catalog__button');
const filterClose = document.querySelector('.filter__close');
const filter = document.querySelector('.filter');
const filterOverlay = document.querySelector('.filter-overlay');

if(filterOpen) {
  filterOpen.addEventListener('click', (e) => {
    e.preventDefault();
    formFilter.reset();
    filterOverlay.classList.toggle('filter-overlay--shown');
    filter.classList.toggle('filter--opened');
    body.classList.add('disable-scroll');
  })
};

if(filterClose) {
  filterClose.addEventListener('click', () => {
    filterOverlay.classList.remove('filter-overlay--shown');
    filter.classList.remove('filter--opened');
    body.classList.remove('disable-scroll');
  })
};

if (filterOverlay) {

document.addEventListener('keydown', (evt) => {
  if(evt.keyCode === 27) {
    filterOverlay.classList.remove('filter-overlay--shown');
    filter.classList.remove('filter--opened');
    body.classList.remove('disable-scroll');
  }
})
}

if(filterOverlay) {
  filterOverlay.addEventListener('click', (evt) => {
    if (evt.target === filterOverlay) {
      filterOverlay.classList.remove('filter-overlay--shown');
      filter.classList.remove('filter--opened');
      body.classList.remove('disable-scroll');
    }
  });
};

if (filterOverlay) {

  filterClose.addEventListener("blur", function() {
    filterOverlay.classList.remove('filter-overlay--shown');
    filter.classList.remove('filter--opened');
    body.classList.remove('disable-scroll');
  });

}
