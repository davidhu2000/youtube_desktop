const electron = require('electron');
const { BrowserWindow } = electron.remote;
const path = require('path');
const url = require('url');

let videoWin;

const createWindow = () => {
  videoWin = new BrowserWindow({
    minWidth: 230,
    minHeight: 130,
    width: 400,
    height: 300
  });

  win.loadUrl(url.format({
    pathname:
  }))
}
