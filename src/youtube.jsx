/* global Promise, document, localStorage, window */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'core/store';
import Root from 'core/root';
import { refreshToken } from 'modules/user/utils';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  refreshToken().then(() => {
    let preloadedState = {
      user: JSON.parse(localStorage.getItem('google-user'))
    };
    const store = configureStore(preloadedState);

    // fetch for new access token before the current expires.
    setInterval(refreshToken, 3400000);

    ReactDOM.render(<Root store={store} />, root);

    // TODO: remove for production
    window.store = store;
    window.s = store.getState;
  });
});
