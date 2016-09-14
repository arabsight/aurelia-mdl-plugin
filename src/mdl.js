import { inject, customAttribute } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdl-target')
export class Mdl {
    constructor(element) {
        this.element = element;
    }

    attached() {
        // todo check if autoupgrade
        componentHandler.upgradeElement(this.element);
    }
}
