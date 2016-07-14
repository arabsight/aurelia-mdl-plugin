define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.aurelia.resources.registerViewEngineHooks({
      afterCreate: function afterCreate(view) {
        return upgrade(view);
      }
    });
  }

  function upgrade(view) {
    if (typeof componentHandler === 'undefined') {
      throw new Error('mdl needs to be loaded.');
    }

    var mdlClasses = ['.mdl-js-button', '.mdl-js-checkbox', '.mdl-js-data-table', '.mdl-js-icon-toggle', '.mdl-js-layout', '.mdl-js-menu', '.mdl-js-progress', '.mdl-js-radio', '.mdl-js-ripple-effect', '.mdl-js-slider', '.mdl-js-snackbar', '.mdl-js-spinner', '.mdl-js-switch', '.mdl-js-tabs', '.mdl-js-textfield', '.mdl-tooltip'];

    var mdlElements = view.fragment.querySelectorAll(mdlClasses.join());

    for (var _iterator = mdlElements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var item = _ref;

      if (item.parentElement) {
        continue;
      }
      if (item.classList && (item.classList.contains('mdl-js-layout') || item.classList.contains('mdl-js-menu'))) {
        var container = document.createElement('div');
        item.parentNode.insertBefore(container, item);
        item.parentNode.removeChild(item);
        container.appendChild(item);
      }
    }

    for (var _iterator2 = mdlElements, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var _item = _ref2;

      componentHandler.upgradeElement(_item);
    }
  }
});