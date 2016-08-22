## Usage
- With jspm:
```bash
jspm install material-design-lite
jspm install npm:aurelia-mdl-plugin
```

- Register the plugin:
```js
import 'aurelia-mdl-plugin';

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
        "material.css"
    ]
},
{
    "name": "aurelia-mdl-plugin",
    "path": "../node_modules/aurelia-mdl-plugin/dist/amd",
    "main": "index"
}
```

- Register the plugin and require css file the same way.
- if you want to use another color theme:

change the resources key:

```json
"resources": [
    "material.deep_orange-blue.min.css"
]
```

import the css:
```html
<require from="material-design-lite/material.deep_orange-blue.min.css"></require>
```
