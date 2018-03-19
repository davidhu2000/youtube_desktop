/* global NODE_ENV */
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    minWidth: 530,
    minHeight: 330,
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png')
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', () => {
  ipcMain.on('open-url', (event, arg) => {
    shell.openExternal(arg);
  });
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) createWindow();
});
