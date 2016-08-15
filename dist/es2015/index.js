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

    config.aurelia.use.globalResources('./mdl');

    if (pluginConfig.autoUpgradeMode === true) {
        config.aurelia.resources.registerViewEngineHooks({
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