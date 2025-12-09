module.exports = function override(config, env) {
  // Disable source map loader warnings for specific modules
  config.ignoreWarnings = [
    {
      module: /@mediapipe\/tasks-vision/,
    },
    {
      module: /@mediapipe\/tasks/,
    },
    {
      module: /@tensorflow\/tfjs/,
    }
  ];

  return config;
};