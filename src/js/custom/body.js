"use strict";
;
(function () {
    //     $('.form').click(function () {
    //         $('body').toggleClass('oh');
    //     });
    let panel = document.querySelector('.bo');
    document.querySelector('.menu__btn').addEventListener('click', e => {
        panel.classList.toggle('oh');
    });
})();
"use strict";
;
(function () {

    // const body = document.getElementsByTagName('body')[0];
    // const html = body.parentNode;
    // const testModal = document.querySelectorAll('.btn');
    // testModal.forEach(btn => {
    //     btn.addEventListener('click', () => {

    //     });
    // });
    // document.addEventListener("DOMContentLoaded", function () {
    //     var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    //     console.log(scrollbar);
    //     document.querySelector('[href="#openModal"]').addEventListener('click', function () {
    //         document.body.style.overflow = 'hidden';
    //         document.querySelector('#openModal').style.marginLeft = scrollbar;
    //     });
    //     document.querySelector('[href="#close"]').addEventListener('click', function () {
    //         document.body.style.overflow = 'visible';
    //         document.querySelector('#openModal').style.marginLeft = '0px';
    //     });
    // });
})();
"use strict";
;
(function () {
})();
"use strict";
;
// (function () {
//     var body = document.getElementsByTagName('body')[0]; // Получаем боди

//     var html = body.parentNode; // Получаем html

//     var modalFirst = document.querySelector('.modalDialog');
//     var modalSecond = document.querySelector('.modalDialogTwo');
//     var modalThird = document.querySelector('.modalfooter');
//     document.addEventListener('click', function (e) {

//         if (e.target.classList.contains('modal-first')) {


//             modalFirst.classList.add('modal--open'); // Добавляем по клику класс, по которому модалка, которых две, откроется (его надо прописать в css)

//             body.classList.add('oh'); // Запрет прокрутки боди

//             html.classList.add('html-overflow'); // Предотвращение дергания экрана при открытии модалки
//         } else if (e.target.classList.contains('btn_left')) {
//             modalSecond.classList.add('modal--open'); // Добавляем по клику класс, по которому модалка, которая одна по середине, откроется (его надо прописать в css)

//             body.classList.add('oh'); // Запрет прокрутки боди

//             html.classList.add('html-overflow'); // Предотвращение дергания экрана при открытии модалки
//         } else if (e.target.classList.contains('btn__footer-placement')) {
//             modalThird.classList.add('modal--open'); // Добавляем по клику класс, по которому модалка, которая одна по середине, откроется (его надо прописать в css)

//             body.classList.add('oh'); // Запрет прокрутки боди

//             html.classList.add('html-overflow'); // Предотвращение дергания экрана при открытии модалки
//         } else if (e.target.classList.contains('close') && modalFirst.classList.contains('modal--open')) {
//             // Если клик был по крестику и первая или нижняя модалка открыты, то они закрываются
//             body.classList.remove('oh'); // Снятие запрета прокрутки боди

//             html.classList.remove('html-overflow'); // Снятие блокировки html

//             modalFirst.classList.remove('modal--open');
//         } else if (e.target.classList.contains('close') && modalSecond.classList.contains('modal--open')) {
//             // Если клик был по крестику и средняя модалка открыта, то она закрывается
//             modalSecond.classList.remove('modal--open');
//             body.classList.remove('oh'); // Снятие запрета прокрутки боди

//             html.classList.remove('html-overflow'); // Снятие блокировки html
//         } else if (e.target.classList.contains('close') && modalThird.classList.contains('modal--open')) {
//             // Если клик был по крестику и средняя модалка открыта, то она закрывается
//             modalThird.classList.remove('modal--open');
//             body.classList.remove('oh'); // Снятие запрета прокрутки боди

//             html.classList.remove('html-overflow'); // Снятие блокировки html
//         }
//     });
// })();