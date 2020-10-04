const appRoot = "src/";
const outputRoot = "dist/";

module.exports = {
    root: appRoot,
    source: appRoot + "**/*.js",
    html: appRoot + "**/*.html",
    style: "styles/**/*.css",
    output: outputRoot,
    e2eSpecsSrc: "test/e2e/src/*.js",
    e2eSpecsDist: "test/e2e/dist/",
};
