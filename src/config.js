const MDL_CLASSES = [
    'mdl-js-button',
    'mdl-js-checkbox',
    'mdl-js-data-table',
    'mdl-js-icon-toggle',
    'mdl-js-layout',
    'mdl-js-menu',
    'mdl-js-progress',
    'mdl-js-radio',
    'mdl-js-ripple-effect',
    'mdl-js-slider',
    'mdl-js-snackbar',
    'mdl-js-spinner',
    'mdl-js-switch',
    'mdl-js-tabs',
    'mdl-js-textfield',
    'mdl-tooltip'
];

export const MDL_ATTRIBUTE_NAME = 'mdl-target';
export const MDL_RIPPLE_SELECTOR = '.mdl-js-ripple-effect';

export class MdlConfig {
    constructor() {
        this.autoUpgradeMode = true;
    }

    autoUpgrade(value = true) {
        this.autoUpgradeMode = Boolean(value);
        return this;
    }

    addClasses(...names) {
        MDL_CLASSES.push(...names);
        return this;
    }

    static get mdlClasses() {
        return MDL_CLASSES;
    }

    static get mdlSelectors() {
        return MDL_CLASSES.map(selector => `.${selector}`).join();
    }
}
