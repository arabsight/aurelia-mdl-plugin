var _dec, _dec2, _class;

import { MdlConfig, MDL_ATTRIBUTE_NAME } from './config';
import { inject, customAttribute } from 'aurelia-framework';

export let Mdl = (_dec = inject(Element, MdlConfig), _dec2 = customAttribute(MDL_ATTRIBUTE_NAME), _dec(_class = _dec2(_class = class Mdl {
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
}) || _class) || _class);