"use strict";
;
(function () {
    //     $('.form').click(function () {
    //         $('body').toggleClass('oh');
    //     });
    let panel = document.querySelector('.body');
    document.querySelector('.menu__btn').addEventListener('click', e => {
        panel.classList.toggle('oh');
    });
})();
"use strict";
;
(function () {

    const body = document.getElementsByTagName('body')[0];
    const html = body.parentNode;
    const testModal = document.querySelectorAll('.btn');
    testModal.forEach(btn => {
        btn.addEventListener('click', () => {

        });
    });
})();
"use strict";
;