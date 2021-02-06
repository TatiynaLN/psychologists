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

    // const body = document.getElementsByTagName('body')[0];
    // const html = body.parentNode;
    // const testModal = document.querySelectorAll('.btn');
    // testModal.forEach(btn => {
    //     btn.addEventListener('click', () => {

    //     });
    // });
    document.addEventListener("DOMContentLoaded", function () {
        var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
        console.log(scrollbar);
        document.querySelector('[href="#openModal"]').addEventListener('click', function () {
            document.body.style.overflow = 'hidden';
            document.querySelector('#openModal').style.marginLeft = scrollbar;
        });
        document.querySelector('[href="#close"]').addEventListener('click', function () {
            document.body.style.overflow = 'visible';
            document.querySelector('#openModal').style.marginLeft = '0px';
        });
    });
})();
"use strict";
;
(function () {
})();
"use strict";
;