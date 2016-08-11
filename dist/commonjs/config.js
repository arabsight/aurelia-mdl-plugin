"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MdlConfig = exports.MdlConfig = function () {
  function MdlConfig() {
    _classCallCheck(this, MdlConfig);

    this.usingAttr = false;
  }

  MdlConfig.prototype.useAttribute = function useAttribute() {
    this.usingAttr = true;
  };

  return MdlConfig;
}();