'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Mdl = undefined;

var _dec, _dec2, _class;

var _aureliaFramework = require('aurelia-framework');

var _config = require('./config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mdl = exports.Mdl = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.DOM.Element, _config.MdlConfig), _dec2 = (0, _aureliaFramework.customAttribute)(_config.MDL_ATTRIBUTE_NAME), _dec(_class = _dec2(_class = function () {
    function Mdl(element, config) {
        _classCallCheck(this, Mdl);

        this.element = element;
        this.config = config;
    }

    Mdl.prototype.attached = function attached() {
        var _this = this;

        if (!this.config.autoUpgradeMode && !_config.MdlConfig.mdlClasses.some(function (cls) {
            return _this.element.classList.contains(cls);
        })) {
            return;
        }

        componentHandler.upgradeElement(this.element);

        if (this.element.MaterialCheckbox || this.element.MaterialRadio || this.element.MaterialIconToggle || this.element.MaterialSwitch || this.element.MaterialDataTable || this.element.MaterialTabs || this.element.MaterialMenu) {
            var children = this.element.querySelectorAll(_config.MDL_RIPPLE_SELECTOR);
            for (var i = 0; i < children.length; i++) {
                componentHandler.upgradeElement(children[i]);
            }
        }
    };

    return Mdl;
}()) || _class) || _class);