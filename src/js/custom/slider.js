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
        initialSlide: 0,
        autoHeight: true,
        loop: true,
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
// "use strict";
// ;

(function () {
    new Swiper('.education-sliders', {
        //стрелки
        navigation: {
            nextEl: '.swiper-buton-lefts',
            prevEl: '.swiper-buton-rights'
        },

        //колличество пролистываемых слайдов
        slidesPerGroup: 1,
        //активный слайд по центру
        // centerredSlides: true,
        //стартовый слайд отсчет с 0
        initialSlide: 0,
        autoHeight: true,
        loop: true, //бесконечная прокрутка
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
        autoHeight: true,
        loop: true,
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
"use strict";
;
(function () {
    new Swiper('.blog-slider', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        //колличество пролистываемых слайдов
        slidesPerGroup: 1,
        //активный слайд по центру
        // centerredSlides: true,
        //стартовый слайд отсчет с 0
        initialSlide: 0,
        spaceBetween: 23,
        // centeredSlides: true,
        autoHeight: true,
        loop: true,
        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });

                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },
        breakpoints: {
            320: {
                //колличество слайдов для показа
                slidesPerView: 1,
            },
            411: {
                //колличество слайдов для показа
                slidesPerView: 1.2,
            },
            768: {
                //колличество слайдов для показа
                slidesPerView: 1.6,
                centeredSlides: true,
            },
            1700: {
                //колличество слайдов для показа
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 19,
            }

        },
    });

})();
"use strict";
;
