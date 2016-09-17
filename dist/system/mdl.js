'use strict';

System.register(['./config', 'aurelia-framework'], function (_export, _context) {
    "use strict";

    var MdlConfig, MDL_ATTRIBUTE_NAME, inject, customAttribute, _dec, _dec2, _class, Mdl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_config) {
            MdlConfig = _config.MdlConfig;
            MDL_ATTRIBUTE_NAME = _config.MDL_ATTRIBUTE_NAME;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            _export('Mdl', Mdl = (_dec = inject(Element, MdlConfig), _dec2 = customAttribute(MDL_ATTRIBUTE_NAME), _dec(_class = _dec2(_class = function () {
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
            }()) || _class) || _class));

            _export('Mdl', Mdl);
        }
    };
});