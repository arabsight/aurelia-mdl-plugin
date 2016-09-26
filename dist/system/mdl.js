'use strict';

System.register(['aurelia-framework', './config'], function (_export, _context) {
    "use strict";

    var inject, customAttribute, DOM, MdlConfig, MDL_ATTRIBUTE_NAME, MDL_RIPPLE_SELECTOR, _dec, _dec2, _class, Mdl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
            DOM = _aureliaFramework.DOM;
        }, function (_config) {
            MdlConfig = _config.MdlConfig;
            MDL_ATTRIBUTE_NAME = _config.MDL_ATTRIBUTE_NAME;
            MDL_RIPPLE_SELECTOR = _config.MDL_RIPPLE_SELECTOR;
        }],
        execute: function () {
            _export('Mdl', Mdl = (_dec = inject(DOM.Element, MdlConfig), _dec2 = customAttribute(MDL_ATTRIBUTE_NAME), _dec(_class = _dec2(_class = function () {
                function Mdl(element, config) {
                    _classCallCheck(this, Mdl);

                    this.element = element;
                    this.config = config;
                }

                Mdl.prototype.attached = function attached() {
                    var _this = this;

                    if (!this.config.autoUpgradeMode && !MdlConfig.mdlClasses.some(function (cls) {
                        return _this.element.classList.contains(cls);
                    })) {
                        return;
                    }

                    componentHandler.upgradeElement(this.element);

                    if (this.element.MaterialCheckbox || this.element.MaterialRadio || this.element.MaterialIconToggle || this.element.MaterialSwitch || this.element.MaterialDataTable || this.element.MaterialTabs || this.element.MaterialMenu) {
                        var children = this.element.querySelectorAll(MDL_RIPPLE_SELECTOR);
                        children.forEach(function (child) {
                            return componentHandler.upgradeElement(child);
                        });
                    }
                };

                return Mdl;
            }()) || _class) || _class));

            _export('Mdl', Mdl);
        }
    };
});