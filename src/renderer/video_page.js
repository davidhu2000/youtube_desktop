const electron = window.require('electron');
const { BrowserWindow } = electron.remote;
const path = require('path');
const url = require('url');


const videoWindow = videoId => {
  let videoWin;

  videoWin = new BrowserWindow({
    minWidth: 230,
    minHeight: 130,
    width: 400,
    height: 300
  });

  videoWin.loadURL(url.format({
    pathname: path.join(__dirname, `index.html?videoId=${videoId}`),
    protocol: 'file:',
    slashes: true
  }));

  videoWin.on('closed', () => {
    videoWin = null;
  });

  return videoWin;
}

export default videoWindow;
