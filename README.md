# Material Design Lite plugin for Aurelia. [CLI DEMO](https://github.com/arabsight/aurelia-mdl-plugin-demo)

## Usage
## With jspm:
```bash
jspm install material-design-lite
jspm install aurelia-mdl-plugin
```

- Register the plugin:
```js
import 'material-design-lite/material';

export function configure(aurelia) {
    ...
    aurelia.use.plugin('aurelia-mdl-plugin');
    ...
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

## With Aurelia CLI:

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

- Register the plugin:

```js
import 'material-design-lite';
export function configure(aurelia) {
    ...
    aurelia.use.plugin('aurelia-mdl-plugin');
    ...
}
```

- require css file the same way.
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

## Configure the plugin
- manual upgrade:

the plugin looks for specific mdl components and adds a custom attribute for each one automatically.
If for some reason you don't wanna auto upgrade you can change that when registering the plugin:

```js
aurelia.use
    .plugin('aurelia-mdl-plugin', m => m.autoUpgrade(false));
```
this way you need to add 'mdl-target' custom attribute manually to every component that needs upgrading.

- upgrading other components:

if you want to upgrade other components like custom mdl components you can register them like this:

```js
aurelia.use
    .plugin('aurelia-mdl-plugin', m => m.addClasses('mdl-custom-one', 'two'));
```

- example: using mdl-selectfield with aurelia cli:

aurelia.json:
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
    "name": "mdl-selectfield",
    "path": "../node_modules/mdl-selectfield/dist",
    "main": "mdl-selectfield",
    "resources": [
        "mdl-selectfield.css"
    ]
},
{
    "name": "aurelia-mdl-plugin",
    "path": "../node_modules/aurelia-mdl-plugin/dist/amd",
    "main": "index"
}
```

config:
```js
import 'material-design-lite';
import 'mdl-selectfield';
export function configure(aurelia) {
    ...
    aurelia.use.
        plugin('aurelia-mdl-plugin', mdl => {
            mdl.addClasses('mdl-js-selectfield');
        });
    ...
}
```
require css in html:
```html
<require from="material-design-lite/material.css"></require>
<require from="mdl-selectfield/mdl-selectfield.css"></require>

<div class="mdl-selectfield mdl-js-selectfield">
    <select id="gender" class="mdl-selectfield__select">
        <option value=""></option>
        <option value="option1">option 1</option>
        <option value="option2">option 2</option>
    </select>
    <label class="mdl-selectfield__label" for="gender">User gender</label>
    <span class="mdl-selectfield__error">Select a value</span>
</div>
```
