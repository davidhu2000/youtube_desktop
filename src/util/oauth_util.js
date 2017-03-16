import YT_API_KEY from '../../config/api_key';

export const authenticateUser = () => {
  let baseUrl = 'https://accounts.google.com/o/oauth2/auth';
  let redirectUrl = 'http://localhost:5000/oauth2callback';
  let scope = 'https://gdata.youtube.com';

  let requestUrl = `${baseUrl}?client_id=${YT_API_KEY.clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=code&access_type=offline`

  window.open(requestUrl);

  let webView = document.createElement('webview');
  webView.addEventListener('new-window', e => {
    webView.src = requestUrl;
  });

}
