export function configure(config) {
  config.aurelia.resources
    .registerViewEngineHooks({
      afterCreate: (view) => upgrade(view)
    });
}

function upgrade(view) {
  if (typeof (componentHandler) === 'undefined') {
    throw new Error('mdl needs to be loaded.');
  }

  const mdlClasses = [
    '.mdl-js-button',
    '.mdl-js-checkbox',
    '.mdl-js-data-table',
    '.mdl-js-icon-toggle',
    '.mdl-js-layout',
    '.mdl-js-menu',
    '.mdl-js-progress',
    '.mdl-js-radio',
    '.mdl-js-ripple-effect',
    '.mdl-js-slider',
    '.mdl-js-snackbar',
    '.mdl-js-spinner',
    '.mdl-js-switch',
    '.mdl-js-tabs',
    '.mdl-js-textfield',
    '.mdl-tooltip'
  ];

  let mdlElements = view.fragment.querySelectorAll(mdlClasses.join());

  for (let item of mdlElements) {
    if (item.parentElement) { continue; }
    if (item.classList && (item.classList.contains('mdl-js-layout') || item.classList.contains('mdl-js-menu'))) {
      let container = document.createElement('div');
      item.parentNode.insertBefore(container, item);
      item.parentNode.removeChild(item);
      container.appendChild(item);
    }
  }

  for (let item of mdlElements) {
    componentHandler.upgradeElement(item);
  }
}
