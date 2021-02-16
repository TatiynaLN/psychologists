"use strict";
;
(function () {
    let panel = document.querySelector('.bo');
    document.querySelector('.menu__btn').addEventListener('click', e => {
        panel.classList.toggle('oh');
    });
})();
"use strict";
;
(function () {

    let map = document.getElementById('map');
    let options_map = {
        once: true,
        passive: true,
        capture: true
    };
    map.addEventListener('click', start_lazy_map, options_map);
    map.addEventListener('mouseover', start_lazy_map, options_map);
    map.addEventListener('touchstart', start_lazy_map, options_map);
    map.addEventListener('touchmove', start_lazy_map, options_map);

    let map_loaded = false;
    function start_lazy_map() {
        if (!map_loaded) {
            let map_block = document.getElementById('ymap_lazy');
            map_loaded = true;
            map_block.setAttribute('src', map_block.getAttribute('data-src'));
            map_block.removeAttribute('data-src');
            console.log('YMAP LOADED');
        }
    }
})();
"use strict";
;