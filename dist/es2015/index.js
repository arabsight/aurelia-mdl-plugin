export function configure(config) {
  config.aurelia.resources.registerViewEngineHooks({
    afterCreate: view => upgrade(view)
  });
}

function upgrade(view) {
  if (typeof componentHandler === 'undefined') {
    throw new Error('mdl needs to be loaded.');
  }

  const mdlClasses = ['.mdl-layout', '.mdl-tabs', '.mdl-button', '.mdl-textfield', '.mdl-checkbox', '.mdl-radio', '.mdl-switch', '.mdl-progress', '.mdl-spinner', '.mdl-slider', '.mdl-grid', '.mdl-data-table', '.mdl-tooltip', '.mdl-icon-toggle', '.mdl-dialog', '.mdl-mega-footer', '.mdl-mini-footer', '.mdl-menu', '.mdl-snackbar'];

  let mdlElements = view.fragment.querySelectorAll(mdlClasses.join());

  for (let item of mdlElements) {
    if (item.parentElement) {
      continue;
    }
    if (item.classList && item.classList.contains('mdl-layout')) {
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