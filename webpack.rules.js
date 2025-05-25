module.exports = [
  // ✅ Support for CSS with Tailwind
  // {
  //   test: /\.css$/,
  //   use: ['postcss-loader']
  // },
  // Add support for native node modules
  {
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader',
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  
  // ✅ Support for JSX and JS
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  // ✅ Support for TS and TSX
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: 'ts-loader'
  }

];
