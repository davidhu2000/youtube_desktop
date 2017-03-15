import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { trendingVideos } from './actions/search_result_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={ store } />, root);

  window.store = store;
  window.trendingVideos = trendingVideos;
});
