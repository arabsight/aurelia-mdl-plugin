'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inject, customAttribute, _dec, _dec2, _class, Mdl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            _export('Mdl', Mdl = (_dec = inject(Element), _dec2 = customAttribute('mdl'), _dec(_class = _dec2(_class = function () {
                function Mdl(element) {
                    _classCallCheck(this, Mdl);

                    this.element = element;
                }

                Mdl.prototype.attached = function attached() {
                    componentHandler.upgradeElement(this.element);
                };

                return Mdl;
            }()) || _class) || _class));

            _export('Mdl', Mdl);
        }
    };
});