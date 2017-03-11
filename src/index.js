import { PLATFORM } from 'aurelia-pal';
import { MdlConfig, MDL_ATTRIBUTE_NAME } from './config';

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

    config.globalResources(PLATFORM.moduleName('./mdl'));

    if (pluginConfig.autoUpgradeMode === true) {
        config.aurelia.resources
            .registerViewEngineHooks({
                beforeCompile: beforeViewCompiled
            });
    }
}

function beforeViewCompiled(content) {
    let elements = content.querySelectorAll(MdlConfig.mdlSelectors);
    if (elements.length === 0) return;

    for (let i = 0; i < elements.length; i++) {
        let item = elements.item(i);
        item.setAttribute(MDL_ATTRIBUTE_NAME, '');
    }
}
