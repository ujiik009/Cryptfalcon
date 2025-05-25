const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
