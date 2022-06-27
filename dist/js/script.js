//добавление других js  к общему файлу
////////импорты//////////

//необходимая часть , не удалять!!!!!!!!!! нужен для работы плагина webp-css
function testWebP(callback) {
    let webP = new Image();
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

//основной скрипт

window.addEventListener('DOMContentLoaded', function () {
    //////////////функция вывода размеров   console.log(salePrice[i].getBoundingClientRect().width);


    /////////////////////////////////////СЛАЙДЕР///////////////////////////////////////////////
    //две кнопки назад и вперед для слайдера
    let slaiderButtonBack = document.querySelector('.production-slaider__button-back');
    let slaiderButtonForw = document.querySelector('.production-slaider__button-forw');

    let polotnoLinear = document.querySelector('.ous-production__item.item1');
    let polotnoCustom = document.querySelector('.ous-production__item.item2');
    let polotnoZigzag = document.querySelector('.ous-production__item.item3');

    //ЭЛЕМЕНТЫ слайдера как дивчик (должны раняться количеству элементов в карусели)
    let ousProduction = document.querySelectorAll('.ous-production__item');

    //элементы слайдера внутри карусели
    let slaiderItems = document.querySelectorAll('.production-slaider__body-slaider__item');
    //
    let index = 0;
    slaiderItems[index]?.classList.add('show');
    //цикл отслеживания нажатия на ЭЛЕМЕНТЫ слайдера как дивчик
    for (let k = 0; k < ousProduction.length; k++) {
        ousProduction[k].addEventListener('click', () => {
            ousProduction[index].classList.remove('ousProductionActiveItem');
            ousProduction[k].classList.add('ousProductionActiveItem');
            slaiderItems[index]?.classList.remove('show');
            index = k;
            slaiderItems[k]?.classList.add('show');
        })
    }
    //функции прибавления и уменьшения индексов элементов при нажатии кнопок назад и вперед
    let clickButtonBack = () => {
        if (index == 0) {
            slaiderItems[index]?.classList.remove('show');
            index = slaiderItems.length - 1;
            slaiderItems[index]?.classList.add('show');
        } else if (index <= slaiderItems.length - 1) {
            slaiderItems[index]?.classList.remove('show');
            index--;
            slaiderItems[index]?.classList.add('show');
        }
    };
    let clickButtonForw = () => {
        if (index < slaiderItems.length - 1) {
            slaiderItems[index]?.classList.remove('show');
            index++;
            slaiderItems[index]?.classList.add('show');
        } else if (index = slaiderItems.length - 1) {
            slaiderItems[index]?.classList.remove('show');
            index = 0;
            slaiderItems[index]?.classList.add('show');
        }
    };
    //слушаем кнопки назад и вперед
    slaiderButtonBack?.addEventListener('click', clickButtonBack);
    slaiderButtonForw?.addEventListener('click', clickButtonForw);
;//мой собственный слайдер, простой но мой

    ////////////////////скрипт для слайдера swiper//////////////////////
    if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.sliderSwiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.sliderProduction', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    grabCursor: true,
    slidesPerView: 5,
  });
}
;
    /////////////////////////////////////////////////////////////

    /////////////сокрытие раздела отраслевые решения при нажатии н а кнопку///////////////////
    let buttonCloseOpen = document.querySelector('.industry-solutions__button-close-open');
    
    buttonCloseOpen?.addEventListener('click', ()=> {
        document.querySelector('.industry-solutions__list-solutions').classList.toggle('visually-hidden');
    })
});

/////////////////////функция проверки коректности ввода телефона//////////////////////
function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#modal-window__form-phone");
    input?.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });
//////////////////////