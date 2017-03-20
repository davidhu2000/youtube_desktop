import React from 'react';

import App from './app';

const errorLoading = error => {
  throw new Error(`Dynamic page loading failed: ${error}`)
}

const loadRoute = callback => {
  return module => callback(null, module.default);
}

export default {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'search',
      getComponent(location, cb) {
        System.import('./search_index')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'trending',
      getComponent(location, cb) {
        System.import('./trending')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
}
