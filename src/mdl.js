import {inject, customAttribute} from 'aurelia-framework';

@inject(Element)
@customAttribute('mdl')
export class Mdl {
    constructor(element) {
        this.element = element;
    }

    attached() {
        componentHandler.upgradeElement(this.element);
    }
}
