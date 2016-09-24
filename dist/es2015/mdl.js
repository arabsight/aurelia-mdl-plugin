var _dec, _dec2, _class;

import { inject, customAttribute } from 'aurelia-framework';
import { MdlConfig, MDL_ATTRIBUTE_NAME, MDL_RIPPLE_SELECTOR } from './config';

export let Mdl = (_dec = inject(Element, MdlConfig), _dec2 = customAttribute(MDL_ATTRIBUTE_NAME), _dec(_class = _dec2(_class = class Mdl {
    constructor(element, config) {
        this.element = element;
        this.config = config;
    }

    attached() {
        if (!this.config.autoUpgradeMode && !this.config.mdlClasses.some(cls => this.element.classList.contains(cls))) {
            return;
        }

        componentHandler.upgradeElement(this.element);

        if (this.element.MaterialCheckbox || this.element.MaterialRadio || this.element.MaterialIconToggle || this.element.MaterialSwitch || this.element.MaterialDataTable || this.element.MaterialTabs) {
            let children = this.element.querySelectorAll(MDL_RIPPLE_SELECTOR);
            children.forEach(child => componentHandler.upgradeElement(child));
        }
    }
}) || _class) || _class);