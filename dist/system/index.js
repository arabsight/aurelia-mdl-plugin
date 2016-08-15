'use strict';

System.register(['./config'], function (_export, _context) {
    "use strict";

    var MdlConfig, pluginConfig;
    function configure(config, configCallback) {
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

    _export('configure', configure);

    function beforeViewCompiled(content, resources, instruction) {
        var elements = content.querySelectorAll(pluginConfig.mdlSelectors);
        if (elements.length === 0) return;

        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            item.setAttribute('mdl-target', '');
        }
    }

    return {
        setters: [function (_config) {
            MdlConfig = _config.MdlConfig;
        }],
        execute: function () {
            pluginConfig = void 0;
        }
    };
});