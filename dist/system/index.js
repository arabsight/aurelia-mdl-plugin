'use strict';

System.register(['./config', './mdl'], function (_export, _context) {
    "use strict";

    var MdlConfig, MDL_ATTRIBUTE_NAME, pluginConfig;
    function configure(config, configCallback) {
        if (typeof componentHandler === 'undefined') {
            throw new Error('MDL needs to be loaded before the plugin.');
        }

        pluginConfig = config.container.get(MdlConfig);

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

    _export('configure', configure);

    function beforeViewCompiled(content) {
        var elements = content.querySelectorAll(MdlConfig.mdlSelectors);
        if (elements.length === 0) return;

        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            item.setAttribute(MDL_ATTRIBUTE_NAME, '');
        }
    }
    return {
        setters: [function (_config) {
            MdlConfig = _config.MdlConfig;
            MDL_ATTRIBUTE_NAME = _config.MDL_ATTRIBUTE_NAME;
        }, function (_mdl) {
            var _exportObj = {};

            for (var _key in _mdl) {
                if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _mdl[_key];
            }

            _export(_exportObj);
        }],
        execute: function () {
            pluginConfig = void 0;
        }
    };
});