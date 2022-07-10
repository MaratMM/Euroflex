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


  @@include('mySliderMy.js');//мой собственный слайдер, простой но мой

  ////////////////////скрипт для слайдера swiper//////////////////////
  @@include('swiperSlider.js');
  /////////////////////////////////////////////////////////////

  /////////////сокрытие раздела отраслевые решения при нажатии н а кнопку///////////////////
  let buttonCloseOpen = document.querySelector('.industry-solutions__button-close-open');

  buttonCloseOpen?.addEventListener('click', () => {
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
  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || "_"
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
  setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function () {
  let input = document.querySelectorAll(".modal-window__form-phone");
  for (let k = 0; k < input.length; k++) {
    input[k]?.addEventListener("input", mask, false);
    input[k].focus();
    setCursorPosition(3, input[0]);
  }
});
//////////////////////