define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
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

    var MDL_CLASSES = ['mdl-js-button', 'mdl-js-checkbox', 'mdl-js-data-table', 'mdl-js-icon-toggle', 'mdl-js-layout', 'mdl-js-menu', 'mdl-js-progress', 'mdl-js-radio', 'mdl-js-ripple-effect', 'mdl-js-slider', 'mdl-js-snackbar', 'mdl-js-spinner', 'mdl-js-switch', 'mdl-js-tabs', 'mdl-js-textfield', 'mdl-tooltip'];

    var MdlConfig = exports.MdlConfig = function () {
        function MdlConfig() {
            _classCallCheck(this, MdlConfig);

            this.usingAttr = false;
        }

        MdlConfig.prototype.useAttribute = function useAttribute() {
            this.usingAttr = true;
        };

        MdlConfig.prototype.addClasses = function addClasses(names) {};

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
    }();
});