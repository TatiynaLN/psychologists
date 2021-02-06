"use strict";
;
(function () {

    const body = document.getElementsByTagName('body')[0]; // Получаем боди
    const html = body.parentNode; // Получаем html

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains == 'modal-first') {
            modalFirst.classList.add('modal-first--open'); // Добавляем по клику класс, по которому модалка, которых две, откроется (его надо прописать в css)
            body.classList.add('no-scroll'); // Запрет прокрутки боди
            html.classList.add('html-overflow'); // Предотвращение дергания экрана при открытии модалки
        } else if (e.target.classList.contains == 'modal-second') {
            modalSecond.classList.add('modal-second--open'); // Добавляем по клику класс, по которому модалка, которая одна по середине, откроется (его надо прописать в css)
            body.classList.add('no-scroll'); // Запрет прокрутки боди
            html.classList.add('html-overflow'); // Предотвращение дергания экрана при открытии модалки
        } else if (e.target.classList.contains == 'close' && modalFirst.classList.contains == 'modal-first--open') { // Если клик был по крестику и первая или нижняя модалка открыты, то они закрываются
            body.classList.remove('no-scroll'); // Снятие запрета прокрутки боди
            html.classList.remove('html-overflow'); // Снятие блокировки html
            modalFirst.classList.remove('modal-first--open');
        } else if (e.target.classList.contains == 'close' && modalSecond.classList.contains == 'modal-second--open') { // Если клик был по крестику и средняя модалка открыта, то она закрывается
            modalFirst.classList.remove('modal-second--open');
            body.classList.remove('no-scroll'); // Снятие запрета прокрутки боди
            html.classList.remove('html-overflow'); // Снятие блокировки html
        }
    });

})();