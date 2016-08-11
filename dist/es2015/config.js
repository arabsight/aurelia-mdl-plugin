export let MdlConfig = class MdlConfig {
  constructor() {
    this.usingAttr = false;
  }

  useAttribute() {
    this.usingAttr = true;
  }
};