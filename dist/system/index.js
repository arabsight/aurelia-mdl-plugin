'use strict';

System.register(['./config'], function (_export, _context) {
    "use strict";

    var MdlConfig, pluginConfig;

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function configure(config, configCallback) {
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

    _export('configure', configure);

    function onViewCreated() {
        var target = document.body;

        var observer = new MutationObserver(function (mutations) {
            mutations.filter(function (m) {
                return m.type === 'childList' && m.addedNodes.length > 0;
            }).map(function (record) {
                return [].concat(_toConsumableArray(record.addedNodes));
            }).reduce(function (a, b) {
                return a.concat(b);
            }, []).filter(function (node) {
                return node.nodeType === 1;
            }).forEach(function (ele) {
                tryUpgrade(ele);
            });
        });

        var cfg = { attributes: false, childList: true, characterData: false };
        observer.observe(target, cfg);
    }

    function tryUpgrade(ele) {
        var isMdlElement = pluginConfig.mdlClasses.some(function (cls) {
            return ele.classList.contains(cls);
        });

        if (isMdlElement) {
            componentHandler.upgradeElement(ele);
            ele.querySelectorAll(pluginConfig.mdlSelectors).forEach(function (child) {
                return componentHandler.upgradeElement(child);
            });
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