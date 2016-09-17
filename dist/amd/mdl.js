define(['exports', './config', 'aurelia-framework'], function (exports, _config, _aureliaFramework) {
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

    var Mdl = exports.Mdl = (_dec = (0, _aureliaFramework.inject)(Element, _config.MdlConfig), _dec2 = (0, _aureliaFramework.customAttribute)(_config.MDL_ATTRIBUTE_NAME), _dec(_class = _dec2(_class = function () {
        function Mdl(element, config) {
            _classCallCheck(this, Mdl);

            this.element = element;
            this.config = config;
        }

        Mdl.prototype.attached = function attached() {
            var _this = this;

            if (this.config.autoUpgradeMode === true) {
                return componentHandler.upgradeElement(this.element);
            }

            var isMdlElement = this.config.mdlClasses.some(function (cls) {
                return _this.element.classList.contains(cls);
            });
            if (isMdlElement) {
                componentHandler.upgradeElement(this.element);
            }
        };

        return Mdl;
    }()) || _class) || _class);
});