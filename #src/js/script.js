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
    
    buttonCloseOpen?.addEventListener('click', ()=> {
        document.querySelector('.industry-solutions__list-solutions').classList.toggle('visually-hidden');
    })
});