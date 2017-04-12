import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { refreshToken } from './util/oauth_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let tokenPromise = new Promise((resolve, reject) => {
    resolve(refreshToken());
    // reject(localStorage.setItem('google-user', null));
  });

  tokenPromise.then(() => {
    let preloadedState = {
      user: JSON.parse(localStorage.getItem('google-user'))
    }

    const store = configureStore(preloadedState);

    ReactDOM.render(<Root store={store}/>, root);
    window.store = store;
    window.s = store.getState;
  });

});
