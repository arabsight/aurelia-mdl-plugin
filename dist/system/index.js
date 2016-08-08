'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.aurelia.use.globalResources('./mdl');
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});