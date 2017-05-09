/* global window, Headers, fetch, localStorage */
import { createUrlParams, errorChecker } from 'helpers';
import { channels } from 'core/youtube_api.js';
import { fetchSubscriptions } from 'modules/subscriptions/actions'; // TODO: potentially coupling
import YT_API_KEY from '../../../config/api_key';

const { BrowserWindow } = window.require('electron').remote;
const request = window.require('superagent');

// TODO: Clear comments

const requestGoogleToken = (options, code) => {
  request.post('https://accounts.google.com/o/oauth2/token', {
    client_id: options.client_id,
    client_secret: options.client_secret,
    code,
    redirect_uri: 'http://localhost:5000/oauth2callback',
    grant_type: 'authorization_code'
  })
  .set("Content-Type", "application/x-www-form-urlencoded")
  .end((err, response) => {
    // console.log(response.body);
    if (response && response.ok) {
      // Success - Received Token.
      // window.localStorage.clear();
      // console.log('setting access and refresh tokens');
      if (response.body.refresh_token) {
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

export const fetchAuthUserChannelId = () => {
  const params = {
    mine: 'true',
    access_token: localStorage.getItem('google-access-token')
  };
  return channels(params);
};

export const fetchUserInfo = () => dispatch => {
  const accessToken = localStorage.getItem('google-access-token');

  request
    .get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`)
    .end((err, response) => {
      // console.log(response);
      if (response && response.ok) {
        const user = response.body;

        fetchAuthUserChannelId().then(
          res => res.json()
        ).then(
          resJson => {
            const channelId = resJson.items[0].id;
            user.channelId = channelId;

            localStorage.setItem('google-user', JSON.stringify(user));
            dispatch({
              type: "RECEIVE_USER",
              user
            });
            dispatch(fetchSubscriptions(channelId));
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

export const loginUser = dispatch => {
  // console.log('do login redux here');
  dispatch(fetchUserInfo());
};

export const authenticateUser = dispatch => {
  const baseUrl = 'https://accounts.google.com/o/oauth2/auth';
  const redirectUrl = 'http://localhost:5000/oauth2callback';
  const scope = [
    'https://gdata.youtube.com',
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtube.upload',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ].join(' ');

  const params = {
    client_id: YT_API_KEY.clientId,
    redirect_uri: redirectUrl,
    scope,
    response_type: 'code',
    access_type: 'offline'
  };

  const urlParams = createUrlParams(params);

  const requestUrl = `${baseUrl}?${urlParams}`;

  const options = {
    client_id: YT_API_KEY.clientId,
    client_secret: YT_API_KEY.clientSecret,
    scope
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
    const rawCode = /code=([^&]*)/.exec(url) || null;
    const code = (rawCode && rawCode.length > 1) ? rawCode[1] : null;
    const error = /\?error=(.+)$/.exec(url);

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
  authWindow.on('close', () => {
    authWindow = null;
  }, false);
};

export const refreshToken = () => {
  const baseUrl = 'https://accounts.google.com/o/oauth2/token';
  const body = {
    client_id: YT_API_KEY.clientId,
    client_secret: YT_API_KEY.clientSecret,
    refresh_token: localStorage.getItem('google-refresh-token'),
    grant_type: 'refresh_token'
  };

  const headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });

  return fetch(baseUrl, {
    headers,
    body: createUrlParams(body),
    method: 'POST'
  }).then(errorChecker).then(
    res => res.json()
  ).then(
    resJson => {
      window.localStorage.setItem('google-access-token', resJson.access_token);
      window.localStorage.setItem('google-token-start-time', Date.now());
    }
  )
  .catch(
    err => console.log(err)
  );
};
