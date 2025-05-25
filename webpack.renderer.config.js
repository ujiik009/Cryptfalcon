const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
});

rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
});

module.exports = {
  module: { rules },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
