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
