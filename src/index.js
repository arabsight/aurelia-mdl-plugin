import { MdlConfig } from './config';

let pluginConfig;

export function configure(config, configCallback) {
    if (typeof (componentHandler) === 'undefined') {
        throw new Error('mdl needs to be loaded.');
    }

    pluginConfig = new MdlConfig();

    if (configCallback !== undefined && typeof(configCallback) === 'function') {
        configCallback(pluginConfig);
    }

    config.aurelia.use.globalResources('./mdl');

    if (pluginConfig.autoUpgradeMode === true) {
        config.aurelia.resources
            .registerViewEngineHooks({
                beforeCompile: beforeViewCompiled
            });
    }
}

function beforeViewCompiled(content, resources, instruction) {
    let elements = content.querySelectorAll(pluginConfig.mdlSelectors);
    if (elements.length === 0) return;

    for (let i = 0; i < elements.length; i++) {
        let item = elements.item(i);
        item.setAttribute('mdl-target', '');
    }
}

// function onViewCreated(view) {
//     console.log(view);
//     let target = document.body;
//
//     let observer = new MutationObserver((mutations) => {
//         mutations
//             .filter(m => m.type === 'childList' && m.addedNodes.length > 0)
//             .map(record => [...record.addedNodes])
//             .reduce((a, b) => a.concat(b), [])
//             .filter(node => node.nodeType === 1)
//             .forEach(ele => {
//                 console.log(ele);
//                 tryUpgrade(ele);
//             });
//     });
//
//     let cfg = {attributes: false, childList: true, characterData: false};
//     observer.observe(target, cfg);
// }

// function tryUpgrade(ele) {
//     let isMdlElement = pluginConfig.mdlClasses.some(cls => ele.classList.contains(cls));
//
//     if (isMdlElement) {
//         componentHandler.upgradeElement(ele);
//         ele.querySelectorAll(pluginConfig.mdlSelectors)
//             .forEach(child => componentHandler.upgradeElement(child));
//     }
// }
