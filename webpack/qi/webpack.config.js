const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HTMLWebpackPlugin({
  title: 'webpack stage qi',
  template: path.resolve(__dirname, 'index.html'),
  inject: 'body',
  minify: false,
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [htmlWebpackPlugin]
}
