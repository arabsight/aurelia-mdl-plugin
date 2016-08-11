## Usage
- With jspm:
```bash
jspm install material-design-lite
jspm install npm:aurelia-mdl-plugin
```

- Register the plugin:
```js
// mdl needs to be loaded first
import 'material-design-lite/material';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        ...
        .plugin('aurelia-mdl-plugin');

    aurelia.start().then(() => aurelia.setRoot());
}
```

- Load mdl CSS:
```html
<template>
    <require from="material-design-lite/material.css"></require>
    ...
    
    <!-- give it a try -->
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
        Button
    </button>
</template>
```

## Using Aurelia CLI:

- Install:
```bash
npm i -S material-design-lite 
npm i -S aurelia-mdl-plugin
```

- Configure aurelia.json:

add mdl & plugin to one of your bundle's dependencies.

```json
{
    "name": "material-design-lite",
    "path": "../node_modules/material-design-lite/dist",
    "main": "material",
    "resources": [
        "material.css" // or one of the color themes
    ]
},
{
    "name": "aurelia-mdl-plugin",
    "path": "../node_modules/aurelia-mdl-plugin/dist/amd",
    "main": "index"
}
```

- Register the plugin and require css file the same way.