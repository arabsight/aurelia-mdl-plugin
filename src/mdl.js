import { inject, customAttribute, DOM } from 'aurelia-framework';
import { MdlConfig, MDL_ATTRIBUTE_NAME, MDL_RIPPLE_SELECTOR } from './config';

@inject(DOM.Element, MdlConfig)
@customAttribute(MDL_ATTRIBUTE_NAME)
export class Mdl {
    constructor(element, config) {
        this.element = element;
        this.config = config;
    }

    attached() {
        if (!this.config.autoUpgradeMode &&
            !MdlConfig.mdlClasses.some(cls => this.element.classList.contains(cls))) {
            return;
        }

        componentHandler.upgradeElement(this.element);

        if (this.element.MaterialCheckbox ||
            this.element.MaterialRadio ||
            this.element.MaterialIconToggle ||
            this.element.MaterialSwitch ||
            this.element.MaterialDataTable ||
            this.element.MaterialTabs ||
            this.element.MaterialMenu) {
            let children = this.element.querySelectorAll(MDL_RIPPLE_SELECTOR);
            for (let i = 0; i < children.length; i++) {
                componentHandler.upgradeElement(children[i]);
            }
        }
    }
}
