/* global Promise */

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'core/store';
import Root from 'core/root';
import { refreshToken } from './util/oauth_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  Promise.all([refreshToken()]).then(() => {
    let preloadedState = {
      user: JSON.parse(localStorage.getItem('google-user'))
    };

    const store = configureStore(preloadedState);

    ReactDOM.render(<Root store={store}/>, root);
    window.store = store;
    window.s = store.getState;
  });
});
