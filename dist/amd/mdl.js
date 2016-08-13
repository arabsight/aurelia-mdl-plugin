define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Mdl = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var Mdl = exports.Mdl = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.customAttribute)('mdl'), _dec(_class = _dec2(_class = function () {
        function Mdl(element) {
            _classCallCheck(this, Mdl);

            this.element = element;
        }

        Mdl.prototype.attached = function attached() {
            componentHandler.upgradeElement(this.element);
        };

        return Mdl;
    }()) || _class) || _class);
});