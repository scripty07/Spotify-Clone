const CracoAlias = require('craco-alias');

// Load env variabled
require('dotenv').config();

// Extending webpack config
let devtool;
let plugins = [
  {
    plugin: CracoAlias,
    options: {
      source: 'tsconfig',
      baseUrl: './src',
      tsConfigPath: './tsconfig.paths.json',
    },
  },
];

// Generate source-maps only on deploy
if (process.env.DEPLOY) {
  devtool = 'source-map';
}

module.exports = {
  plugins,
  devtool,
};
