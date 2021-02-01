// "use strict";
// ;

(function () {
    new Swiper('.education-slider', {
        //стрелки
        navigation: {
            nextEl: '.swiper-buton-left',
            prevEl: '.swiper-buton-right'
        },

        //колличество пролистываемых слайдов
        slidesPerGroup: 1,
        //активный слайд по центру
        // centerredSlides: true,
        //стартовый слайд отсчет с 0
        initialSlide: 1,
        breakpoints: {
            320: {
                //колличество слайдов для показа
                slidesPerView: 1,
            },
            768: {
                //колличество слайдов для показа
                slidesPerView: 2,
            }

        },
    });

})();
"use strict";
;
(function () {
    new Swiper('.reviews-slider', {
        //стрелки
        navigation: {
            nextEl: '.swiper-buton-left',
            prevEl: '.swiper-buton-right'
        },

        //колличество пролистываемых слайдов
        slidesPerGroup: 1,
        //активный слайд по центру
        // centerredSlides: true,
        //стартовый слайд отсчет с 0
        initialSlide: 1,
        spaceBetween: 60,
        centeredSlides: true,
        breakpoints: {
            320: {
                //колличество слайдов для показа
                slidesPerView: 1,
            },
            1020: {
                //колличество слайдов для показа
                slidesPerView: 2,
            }

        },
    });

})();
"use strict";
;
