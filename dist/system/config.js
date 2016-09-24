'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, MDL_CLASSES, MDL_ATTRIBUTE_NAME, MDL_RIPPLE_SELECTOR, MdlConfig;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            MDL_CLASSES = ['mdl-js-button', 'mdl-js-checkbox', 'mdl-js-data-table', 'mdl-js-icon-toggle', 'mdl-js-layout', 'mdl-js-menu', 'mdl-js-progress', 'mdl-js-radio', 'mdl-js-ripple-effect', 'mdl-js-slider', 'mdl-js-snackbar', 'mdl-js-spinner', 'mdl-js-switch', 'mdl-js-tabs', 'mdl-js-textfield', 'mdl-tooltip'];

            _export('MDL_ATTRIBUTE_NAME', MDL_ATTRIBUTE_NAME = 'mdl-target');

            _export('MDL_ATTRIBUTE_NAME', MDL_ATTRIBUTE_NAME);

            _export('MDL_RIPPLE_SELECTOR', MDL_RIPPLE_SELECTOR = '.mdl-js-ripple-effect');

            _export('MDL_RIPPLE_SELECTOR', MDL_RIPPLE_SELECTOR);

            _export('MdlConfig', MdlConfig = function () {
                function MdlConfig() {
                    _classCallCheck(this, MdlConfig);

                    this.autoUpgradeMode = true;
                }

                MdlConfig.prototype.autoUpgrade = function autoUpgrade() {
                    var value = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

                    this.autoUpgradeMode = Boolean(value);
                    return this;
                };

                MdlConfig.prototype.addClasses = function addClasses() {
                    MDL_CLASSES.push.apply(MDL_CLASSES, arguments);
                    return this;
                };

                _createClass(MdlConfig, [{
                    key: 'mdlClasses',
                    get: function get() {
                        return MDL_CLASSES;
                    }
                }, {
                    key: 'mdlSelectors',
                    get: function get() {
                        return MDL_CLASSES.map(function (selector) {
                            return '.' + selector;
                        }).join();
                    }
                }]);

                return MdlConfig;
            }());

            _export('MdlConfig', MdlConfig);
        }
    };
});