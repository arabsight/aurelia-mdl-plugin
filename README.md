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