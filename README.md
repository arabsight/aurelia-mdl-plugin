# aurelia-mdl-plugin

> Material Design Lite will automatically register and render all elements marked with MDL classes upon page load. However in the case where you are creating DOM elements dynamically you need to register new elements using the upgradeElement function.
[Docs](https://getmdl.io/started/#dynamic)

## Usage

```shell
jspm install npm:aurelia-mdl-plugin
```

```js
import 'mdl/material';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin('aurelia-mdl-plugin');
    //...
}
```
