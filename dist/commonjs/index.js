'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mdl = require('./mdl');

Object.keys(_mdl).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _mdl[key];
        }
    });
});
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

var _config = require('./config');

var pluginConfig = void 0;

function configure(config, configCallback) {
    if (typeof componentHandler === 'undefined') {
        throw new Error('MDL needs to be loaded before the plugin.');
    }

    pluginConfig = config.container.get(_config.MdlConfig);

    if (configCallback !== undefined && typeof configCallback === 'function') {
        configCallback(pluginConfig);
    }

    config.globalResources(_aureliaPal.PLATFORM.moduleName('./mdl'));

    if (pluginConfig.autoUpgradeMode === true) {
        config.aurelia.resources.registerViewEngineHooks({
            beforeCompile: beforeViewCompiled
        });
    }
}

function beforeViewCompiled(content) {
    var elements = content.querySelectorAll(_config.MdlConfig.mdlSelectors);
    if (elements.length === 0) return;

    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        item.setAttribute(_config.MDL_ATTRIBUTE_NAME, '');
    }
}