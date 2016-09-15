define(['exports', './config', './mdl'], function (exports, _config, _mdl) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;


    var pluginConfig = void 0;

    function configure(config, configCallback) {
        if (typeof componentHandler === 'undefined') {
            throw new Error('mdl needs to be loaded.');
        }

        pluginConfig = new _config.MdlConfig();

        if (configCallback !== undefined && typeof configCallback === 'function') {
            configCallback(pluginConfig);
        }

        config.globalResources('./mdl');

        if (pluginConfig.autoUpgradeMode === true) {
            config.aurelia.resources.registerViewEngineHooks({
                beforeCompile: beforeViewCompiled
            });
        }
    }

    function beforeViewCompiled(content, resources, instruction) {
        var elements = content.querySelectorAll(pluginConfig.mdlSelectors);
        if (elements.length === 0) return;

        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            item.setAttribute('mdl-target', '');
        }
    }
});