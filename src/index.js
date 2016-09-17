import { MdlConfig, MDL_ATTRIBUTE_NAME } from './config';

// Temp fix to this: https://github.com/aurelia/cli/issues/292
export * from './mdl';

let pluginConfig;

export function configure(config, configCallback) {
    if (typeof (componentHandler) === 'undefined') {
        throw new Error('MDL needs to be loaded before the plugin.');
    }

    // Register the class in root DI container and get a singleton
    // to be reused in ./mdl.js
    pluginConfig = config.container.get(MdlConfig);

    if (configCallback !== undefined && typeof(configCallback) === 'function') {
        configCallback(pluginConfig);
    }

    config.globalResources('./mdl');

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
        item.setAttribute(MDL_ATTRIBUTE_NAME, '');
    }
}
