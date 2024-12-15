const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@lib": path.resolve(__dirname, "src/lib"),
  };
  return config;
};
