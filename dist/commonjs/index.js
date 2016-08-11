'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _config = require('./config');

function configure(config, configCallback) {
  if (typeof componentHandler === 'undefined') {
    throw new Error('mdl needs to be loaded.');
  }

  var cfg = new _config.MdlConfig();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(cfg);
  }

  if (cfg.usingAttr === true) {
    config.aurelia.use.globalResources('./mdl');
  } else {
    config.aurelia.resources.registerViewEngineHooks({
      afterCreate: onViewCreated
    });
  }
}

function onViewCreated() {
  var target = document.body;

  var observer = new MutationObserver(function (mutations) {
    mutations.filter(function (m) {
      return m.type === 'childList' && m.addedNodes.length > 0;
    }).map(function (record) {
      return [].concat(record.addedNodes);
    }).reduce(function (a, b) {
      return a.concat(b);
    }, []).filter(function (node) {
      return node.nodeType === 1;
    }).forEach(function (ele) {
      tryUpgrade(ele);
    });
  });

  var cfg = { attributes: false, childList: true, characterData: false };
  observer.observe(target, cfg);
}

function tryUpgrade(ele) {
  var isMdlElement = mdlClasses.some(function (cls) {
    return ele.classList.contains(cls);
  });

  if (isMdlElement) {
    componentHandler.upgradeElement(ele);
  }
}

var mdlClasses = ['mdl-js-button', 'mdl-js-checkbox', 'mdl-js-data-table', 'mdl-js-icon-toggle', 'mdl-js-layout', 'mdl-js-menu', 'mdl-js-progress', 'mdl-js-radio', 'mdl-js-ripple-effect', 'mdl-js-slider', 'mdl-js-snackbar', 'mdl-js-spinner', 'mdl-js-switch', 'mdl-js-tabs', 'mdl-js-textfield', 'mdl-tooltip'];