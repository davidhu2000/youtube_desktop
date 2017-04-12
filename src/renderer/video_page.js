const electron = window.require('electron');
const { BrowserWindow } = electron.remote;
const path = require('path');
const url = require('url');

const videoWindow = videoId => {
  let videoWin;

  videoWin = new BrowserWindow({
    minWidth: 230,
    minHeight: 130,
    width: 1000,
    height: 800
  });

  videoWin.webContents.openDevTools();

  videoWin.loadURL(url.format({
    pathname: path.join(__dirname, 'src', 'renderer', `index.html`),
    protocol: 'file:',
    slashes: true
  }) + `?videoId=${videoId}`);

  videoWin.on('closed', () => {
    videoWin = null;
  });

  return videoWin;
}

export default videoWindow;
