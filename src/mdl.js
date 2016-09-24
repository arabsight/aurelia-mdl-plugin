import { inject, customAttribute } from 'aurelia-framework';
import { MdlConfig, MDL_ATTRIBUTE_NAME, MDL_RIPPLE_SELECTOR } from './config';

@inject(Element, MdlConfig)
@customAttribute(MDL_ATTRIBUTE_NAME)
export class Mdl {
    constructor(element, config) {
        this.element = element;
        this.config = config;
    }

    attached() {
        if (!this.config.autoUpgradeMode &&
            !this.config.mdlClasses.some(cls => this.element.classList.contains(cls))) {
                return;
            }

        componentHandler.upgradeElement(this.element);

        if (this.element.MaterialCheckbox ||
            this.element.MaterialRadio ||
            this.element.MaterialIconToggle ||
            this.element.MaterialSwitch ||
            this.element.MaterialDataTable ||
            this.element.MaterialTabs) {
            let children = this.element.querySelectorAll(MDL_RIPPLE_SELECTOR);
            children.forEach(child => componentHandler.upgradeElement(child));
        }
    }
}

// if (this.config.autoUpgradeMode === true) {
//     componentHandler.upgradeElement(this.element);
// } else {
//     let isMdlElement = this.config.mdlClasses.some(cls => this.element.classList.contains(cls));
//     if (isMdlElement) {
//         componentHandler.upgradeElement(this.element);
//     }
// }
