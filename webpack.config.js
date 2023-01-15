const path = require('path');
// Plugin to generate the html file automatically using a template
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  // Manage the loaders
  module: {
    rules: [
      // CSS rules
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Assets or img rules
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  //  Use of the plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/template.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
