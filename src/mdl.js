import { MdlConfig, MDL_ATTRIBUTE_NAME } from './config';
import { inject, customAttribute } from 'aurelia-framework';

@inject(Element, MdlConfig)
@customAttribute(MDL_ATTRIBUTE_NAME)
export class Mdl {
    constructor(element, config) {
        this.element = element;
        this.config = config;
    }

    attached() {
        if (this.config.autoUpgradeMode === true) {
            return componentHandler.upgradeElement(this.element);
        }

        let isMdlElement = this.config.mdlClasses.some(cls => this.element.classList.contains(cls));
        if (isMdlElement) {
            componentHandler.upgradeElement(this.element);
        }
    }
}
