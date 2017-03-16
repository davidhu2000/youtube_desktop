import YT_API_KEY from '../../config/api_key';

const { BrowserWindow } = window.require('electron').remote;


export const authenticateUser = () => {
  let baseUrl = 'https://accounts.google.com/o/oauth2/auth';
  let redirectUrl = 'http://localhost:5000/oauth2callback';
  let scope = 'https://gdata.youtube.com';

  let requestUrl = `${baseUrl}?client_id=${YT_API_KEY.clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=code&access_type=offline`

  let options = {
    client_id: YT_API_KEY.clientId,
    scope: scope
  }

  var authWindow = new BrowserWindow({ width: 800, height: 600, show: false, 'node-integration': false });
  authWindow.loadURL(requestUrl);
  authWindow.show();

  function handleCallback (url) {
    var raw_code = /code=([^&]*)/.exec(url) || null;
    var code = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
    var error = /\?error=(.+)$/.exec(url);

    if (code || error)  authWindow.destroy();

    if (code) {
      self.requestGoogleToken(options, code);
      authWindow.destroy();
    } else if (error) {
      alert('Oops! Something went wrong and we couldn\'t' +
        'log you in using Google. Please try again.');
    }
  }

  authWindow.webContents.on('will-navigate', (event, url) => {
    console.log('will-navigate');
    console.log(url);
    handleCallback(url);
  });

  // authWindow.webContents.on('did-get-redirect-request', function (event, oldUrl, newUrl) {
  //   // handleCallback(newUrl);
  //   console.log('id-get-redirect-request');
  // });

  // Reset the authWindow on close
  authWindow.on('close', function() {
      authWindow = null;
  }, false);
}
