const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
    preload: './src/preload.js'   // ⬅️ เพิ่ม preload เข้าไป
  },
  output: {
    filename: '[name].js',        // ⬅️ ให้ Webpack สร้าง main.js และ preload.js
    path: path.resolve(__dirname, '.webpack/main'),
  },
  target: 'electron-main',
};