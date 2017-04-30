import YT_API_KEY from '../../config/api_key';
import { createUrlParams } from 'helpers';
import { channels } from 'core/youtube_api.js';

const { BrowserWindow } = window.require('electron').remote;
const request = window.require('superagent');

// TODO: Clear comments

const requestGoogleToken = (options, code) => {

  request.post('https://accounts.google.com/o/oauth2/token', {
    client_id: options.client_id,
    client_secret: options.client_secret,
    code: code,
    redirect_uri: 'http://localhost:5000/oauth2callback',
    grant_type: 'authorization_code'
  })
  .set("Content-Type", "application/x-www-form-urlencoded")
  .end(function (err, response) {
    // console.log(response.body);
    if (response && response.ok) {
      // Success - Received Token.
      // window.localStorage.clear();
      // console.log('setting access and refresh tokens');
      if(response.body.refresh_token) {
        window.localStorage.setItem('google-refresh-token', response.body.refresh_token);
      }
      window.localStorage.setItem('google-access-token', response.body.access_token);
      window.localStorage.setItem('google-token-start-time', Date.now());

      // window.setInterval(refreshToken, 3400000);
    } else {
      // Error - Show messages.
      console.log("err");
      console.log(err);
    }
  });

};

export const authenticateUser = dispatch => {
  let baseUrl = 'https://accounts.google.com/o/oauth2/auth';
  let redirectUrl = 'http://localhost:5000/oauth2callback';
  let scope = [
    'https://gdata.youtube.com',
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtube.upload',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ].join(' ');

  let params = {
    client_id: YT_API_KEY.clientId,
    redirect_uri: redirectUrl,
    scope: scope,
    response_type: 'code',
    access_type: 'offline'
  };

  let urlParams = createUrlParams(params);

  let requestUrl = `${baseUrl}?${urlParams}`;

  let options = {
    client_id: YT_API_KEY.clientId,
    client_secret: YT_API_KEY.clientSecret,
    scope: scope
  };

  let authWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    'node-integration': false
  });

  authWindow.loadURL(requestUrl);
  authWindow.show();

  const handleCallback = url => {
    let rawCode = /code=([^&]*)/.exec(url) || null;
    let code = (rawCode && rawCode.length > 1) ? rawCode[1] : null;
    let error = /\?error=(.+)$/.exec(url);

    if (code || error) {
      authWindow.destroy();
      setTimeout(() => loginUser(dispatch), 1000);
    }

    if (code) {
      requestGoogleToken(options, code);
    } else if (error) {
      console.log('Oops! Something went wrong and we couldn\'t' +
        'log you in using Google. Please try again.');
       // render some error
      //  console.log(error);
    }
  };

  // authWindow.webContents.on('will-navigate', (event, url) => {
  //   handleCallback(url);
  // });

  authWindow.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
    handleCallback(newUrl);
  });

  // Reset the authWindow on close
  authWindow.on('close', function() {
      authWindow = null;
  }, false);
};

export const loginUser = dispatch => {
  // console.log('do login redux here');
  dispatch(fetchUserInfo());
};

export const fetchAuthUserChannelId = () => {
  let params = {
    mine: 'true',
    access_token: localStorage.getItem('google-access-token')
  };
  return channels(params);
};

export const fetchUserInfo = () => dispatch => {
  let accessToken = localStorage.getItem('google-access-token');

  request
    .get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`)
    .end((err, response) => {
      // console.log(response);
      if (response && response.ok) {
        let user = response.body;

        fetchAuthUserChannelId().then(
          res => res.json()
        ).then(
          resJson => {
            user.channelId = resJson.items[0].id;
            console.log(user);
            localStorage.setItem('google-user', JSON.stringify(user));
            dispatch({
              type: "RECEIVE_USER",
              user
            });
          }).catch(
            error => console.log(error)
          );
      } else {
        // Error - Show messages.
        console.log("err");
        console.log(err);
      }
    });
};

export const refreshToken = () => {
  // console.log('refreshing');
  request.post('https://accounts.google.com/o/oauth2/token', {
    client_id: YT_API_KEY.clientId,
    client_secret: YT_API_KEY.clientSecret,
    refresh_token: localStorage.getItem('google-refresh-token'),
    grant_type: 'refresh_token'
  })
  .set("Content-Type", "application/x-www-form-urlencoded")
  .end(function (err, response) {
    // console.log(response.body);
    if (response && response.ok) {
      // Success - Received Token.
      window.localStorage.setItem('google-access-token', response.body.access_token);
      window.localStorage.setItem('google-token-start-time', Date.now());
    } else {
      // Error - Show messages.
      console.log("err");
      localStorage.setItem('google-user', null);
      console.log(err);
    }
  });
};
