function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import { MdlConfig } from './config';

export function configure(config, configCallback) {
  if (typeof componentHandler === 'undefined') {
    throw new Error('mdl needs to be loaded.');
  }

  let cfg = new MdlConfig();

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
  let target = document.body;

  let observer = new MutationObserver(mutations => {
    mutations.filter(m => m.type === 'childList' && m.addedNodes.length > 0).map(record => [].concat(_toConsumableArray(record.addedNodes))).reduce((a, b) => a.concat(b), []).filter(node => node.nodeType === 1).forEach(ele => {
      tryUpgrade(ele);
    });
  });

  let cfg = { attributes: false, childList: true, characterData: false };
  observer.observe(target, cfg);
}

function tryUpgrade(ele) {
  let isMdlElement = mdlClasses.some(cls => ele.classList.contains(cls));

  if (isMdlElement) {
    componentHandler.upgradeElement(ele);
  }
}

const mdlClasses = ['mdl-js-button', 'mdl-js-checkbox', 'mdl-js-data-table', 'mdl-js-icon-toggle', 'mdl-js-layout', 'mdl-js-menu', 'mdl-js-progress', 'mdl-js-radio', 'mdl-js-ripple-effect', 'mdl-js-slider', 'mdl-js-snackbar', 'mdl-js-spinner', 'mdl-js-switch', 'mdl-js-tabs', 'mdl-js-textfield', 'mdl-tooltip'];