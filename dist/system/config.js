"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var MdlConfig;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("MdlConfig", MdlConfig = function () {
        function MdlConfig() {
          _classCallCheck(this, MdlConfig);

          this.usingAttr = false;
        }

        MdlConfig.prototype.useAttribute = function useAttribute() {
          this.usingAttr = true;
        };

        return MdlConfig;
      }());

      _export("MdlConfig", MdlConfig);
    }
  };
});