var _dec, _dec2, _class;

import { inject, customAttribute } from 'aurelia-framework';

export let Mdl = (_dec = inject(Element), _dec2 = customAttribute('mdl-target'), _dec(_class = _dec2(_class = class Mdl {
    constructor(element) {
        this.element = element;
    }

    attached() {
        componentHandler.upgradeElement(this.element);
    }
}) || _class) || _class);