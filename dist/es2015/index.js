import { MdlConfig } from './config';

export function configure(config, configCallback) {
  if (typeof componentHandler === 'undefined') {
    throw new Error('mdl needs to be loaded.');
  }

  let cfg = new MdlConfig();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(cfg);
  }

  console.log('using attribute: ' + cfg.usingAttr);

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
    mutations.filter(m => m.type === 'childList' && m.addedNodes.length > 0).map(record => [...record.addedNodes]).reduce((a, b) => a.concat(b), []).filter(node => node.nodeType === 1).forEach(ele => {
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