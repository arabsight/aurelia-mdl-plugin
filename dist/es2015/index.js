function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import { MdlConfig } from './config';

let pluginConfig;

export function configure(config, configCallback) {
    if (typeof componentHandler === 'undefined') {
        throw new Error('mdl needs to be loaded.');
    }

    pluginConfig = new MdlConfig();

    if (configCallback !== undefined && typeof configCallback === 'function') {
        configCallback(pluginConfig);
    }

    if (pluginConfig.usingAttr === true) {
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
    let isMdlElement = pluginConfig.mdlClasses.some(cls => ele.classList.contains(cls));

    if (isMdlElement) {
        componentHandler.upgradeElement(ele);
        ele.querySelectorAll(pluginConfig.mdlSelectors).forEach(child => componentHandler.upgradeElement(child));
    }
}