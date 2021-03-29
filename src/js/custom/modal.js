"use strict";
;
// (function () {

// полифилл CustomEven для IE11
(function () {
    if (typeof window.CustomEvent === "function") return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    window.CustomEvent = CustomEvent;
})();

function $modal(options) {
    var
        _elemModal,
        _eventShowModal,
        _eventHideModal,
        _hiding = false,
        _destroyed = false,
        _animationSpeed = 200;

    function _createModal(options) {
        var
            elemModal = document.createElement('div'),
            //  data-dismiss="modal"
            modalTemplate = '<div class="modal__backdrop"><div class="modal__body" data-modal="content"><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">×</span>{{content}}</div>{{footer}}</div>',
            modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
            modalButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
            modalHTML,
            modalFooterHTML = '';

        elemModal.classList.add('modal');
        modalHTML = modalTemplate.replace('{{title}}', options.title || 'Новое окно');
        modalHTML = modalHTML.replace('{{content}}', options.content || '');
        if (options.footerButtons) {
            for (var i = 0, length = options.footerButtons.length; i < length; i++) {
                var modalFooterButton = modalButtonTemplate.replace('{{button_class}}', options.footerButtons[i].class);
                modalFooterButton = modalFooterButton.replace('{{button_handler}}', options.footerButtons[i].handler);
                modalFooterButton = modalFooterButton.replace('{{button_text}}', options.footerButtons[i].text);
                modalFooterHTML += modalFooterButton;
            }
            modalFooterHTML = modalFooterTemplate.replace('{{buttons}}', modalFooterHTML);
        }
        modalHTML = modalHTML.replace('{{footer}}', modalFooterHTML);
        elemModal.innerHTML = modalHTML;
        document.body.appendChild(elemModal);
        return elemModal;
    }

    function _showModal() {
        if (!_destroyed && !_hiding) {
            _elemModal.classList.add('modal__show');
            document.dispatchEvent(_eventShowModal);
        }
    }

    function _hideModal() {
        _hiding = true;
        _elemModal.classList.remove('modal__show');
        _elemModal.classList.add('modal__hiding');
        setTimeout(function () {
            _elemModal.classList.remove('modal__hiding');
            _hiding = false;
        }, _animationSpeed);
        document.dispatchEvent(_eventHideModal);
    }

    function _handlerCloseModal(e) {
        if (e.target.dataset.dismiss === 'modal') {
            _hideModal();
        }
    }

    _elemModal = _createModal(options || {});


    _elemModal.addEventListener('click', _handlerCloseModal);
    _eventShowModal = new CustomEvent('show.modal', { detail: _elemModal });
    _eventHideModal = new CustomEvent('hide.modal', { detail: _elemModal });

    return {
        show: _showModal,
        hide: _hideModal,
        destroy: function () {
            _elemModal.parentElement.removeChild(_elemModal),
                _elemModal.removeEventListener('click', _handlerCloseModal),
                destroyed = true;
        },
        setContent: function (html) {
            _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
        },
        setTitle: function (text) {
            _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
        }
    }
};

(function () {
    // создадим модальное окно 1
    var modal1 = $modal({

        content: '<h5>Перезвонить вам?</h5><p>Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время</p>\
        <form>\
            <input class="form__input-style modal__phone" type="text" name="user-phone" placeholder="Ваш номер телефона" required="required">\
        <button> <span>Перезвонить мне</span></button>\
        <div class="form__policy">\
                    <input class="form__checkbox" id="modal__chec1" type="checkbox" checked="">\
                    <label class="modal-form__pol" for="modal__chec1"> Вы соглашаетесь с \
                    <a target="_blank" href="#!">условиями обработки персональных данных</a></label>\
                  </div></form>'

    });
    // создадим модальное окно 2
    var modal2 = $modal({
        content: '<h5>Запись на приём</h5><p>Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время для уточнения деталей</p>\
        <form>\
                    <input class="form__input-style form__input-block" type="text" name="name" placeholder="Ваше имя" required="required">\
                    <input class="form__input-style form__input-block" type="text" name="user-phone" placeholder="Ваш номер телефона" required="required">\
                    <button><span>Записаться на приём</span></button>\
                  <div class="form__policy">\
                    <input class="form__checkbox" id="modal__chec2" type="checkbox" checked="">\
                    <label class="modal-form__pol" for="modal__chec2"> \
                            Вы соглашаетесь с \
                    <a target="_blank" href="#!">условиями обработки персональных данных</a>\
                    </label>\
                  </div></form>'
    });
    // создадим модальное окно 3
    var modal3 = $modal({
        content: '<h5>Запись на приём</h5><p>Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время для уточнения деталей</p>\
        <form>\
                    <input class="form__input-style form__input-block" type="text" name="name" placeholder="Ваше имя" required="required">\
                    <input class="form__input-style form__input-block" type="text" name="user-phone" placeholder="Ваш номер телефона" required="required">\
                    <button><span>Записаться на приём</span></button>\
                  </form>\
                  <div class="form__policy">\
                    <input class="form__checkbox" id="modal__chec3" type="checkbox" checked="">\
                    <label class="modal-form__pol" for="modal__chec3"> \
                                        Вы соглашаетесь с \
                    <a target="_blank" href="#!">условиями обработки персональных данных</a>\
                    </label>\
                  </div></form>'
    });
    // создадим модальное окно 4
    var modal4 = $modal({
        content: '<h5>Связаться с психологом</h5><p>Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время для уточнения деталей</p>\
        <form>\
                    <input class="form__input-style form__input-block" type="text" name="name" placeholder="Ваше имя" required="required">\
                    <input class="form__input-style form__input-block" type="text" name="user-phone" placeholder="Ваш номер телефона" required="required">\
                    <button><span>Записаться на приём</span></button>\
                  <div class="form__policy">\
                    <input class="form__checkbox" id="modal__chec4" type="checkbox" checked="">\
                    <label class="modal-form__pol" for="modal__chec4"> \
                                                    Вы соглашаетесь с \
                    <a target="_blank" href="#!">условиями обработки персональных данных</a>\
                    </label>\
                  </div></form>'
    });
    // создадим модальное окно СПАСИБО
    var modal5 = $modal({
        content: '<h5>Спасибо за заявку!</h5><p>Мы свяжемся с вами в ближайшее время, в рабочии часы, указанные на сайте</p>',
    });
    // при клике по кнопке #show-modal-1

    document.addEventListener('click', function (e) {
        if (e.target.dataset.toggle === 'modal-1') {
            // отобразим модальное окно N1
            modal1.show();
        } else if (e.target.dataset.toggle === 'modal-2') {
            // отобразим модальное окно N2
            modal2.show();
        }
        else if (e.target.dataset.toggle === 'modal-3') {
            // отобразим модальное окно N3
            modal3.show();
        }
        else if (e.target.dataset.toggle === 'modal-4') {
            // отобразим модальное окно N4
            modal4.show();
        }
        else if (e.target.dataset.toggle === 'modal-5') {
            // отобразим модальное окно СПАСИБО
            modal5.show();
        }
    });

    var btns = document.querySelectorAll('.btn');
    let panel = document.getElementsByTagName('html')[0];
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            panel.classList.add('oh');
        });
    });
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__btn-close')) {
            panel.classList.remove('oh');
        }
    });
})();


// })();
"use strict";
;
