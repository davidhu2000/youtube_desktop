import YT_API_KEY from '../../config/api_key';
// import request from 'superagent';

const { BrowserWindow } = window.require('electron').remote;
const request = window.require('superagent');

const requestGoogleToken = (options, code) => {

  request
    .post('https://accounts.google.com/o/oauth2/token', {
      client_id: options.client_id,
      client_secret: options.client_secret,
      code: code,
      redirect_uri: 'http://localhost:5000/oauth2callback',
      grant_type: 'authorization_code'
    })
    .set("Content-Type", "application/x-www-form-urlencoded")
    .end(function (err, response) {
      console.log(response);
      if (response && response.ok) {
        // Success - Received Token.
        window.localStorage.setItem('google-access-token', response.body.access_token);
        window.localStorage.setItem('google-refresh-token', response.body.refresh_token);
      } else {
        // Error - Show messages.
        console.log(err);
      }
    });

}

export const authenticateUser = () => {
  let baseUrl = 'https://accounts.google.com/o/oauth2/auth';
  let redirectUrl = 'http://localhost:5000/oauth2callback';
  let scope = 'https://gdata.youtube.com';

  let requestUrl = `${baseUrl}?client_id=${YT_API_KEY.clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=code&access_type=offline`

  let options = {
    client_id: YT_API_KEY.clientId,
    client_secret: YT_API_KEY.clientSecret,
    scope: scope
  }

  var authWindow = new BrowserWindow({ width: 800, height: 600, show: false, 'node-integration': false });
  authWindow.loadURL(requestUrl);
  authWindow.show();
  console.log(requestUrl);
  function handleCallback (url) {
    var raw_code = /code=([^&]*)/.exec(url) || null;
    var code = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
    var error = /\?error=(.+)$/.exec(url);

    if (code || error)  authWindow.destroy();

    if (code) {
      requestGoogleToken(options, code);
      authWindow.destroy();
    } else if (error) {
      alert('Oops! Something went wrong and we couldn\'t' +
        'log you in using Google. Please try again.');
       // render some error
    }
  }

  authWindow.webContents.on('will-navigate', (event, url) => {
    console.log('will-navigate');
    console.log(url);
    handleCallback(url);
  });

  authWindow.webContents.on('did-get-redirect-request', function (event, oldUrl, newUrl) {
    // handleCallback(newUrl);
    console.log('id-get-redirect-request');
    console.log(oldUrl);
    console.log(newUrl);
  });

  // Reset the authWindow on close
  authWindow.on('close', function() {
      authWindow = null;
  }, false);
}
