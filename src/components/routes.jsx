import React from 'react';
import { Route } from 'react-router';
import App from './app';

const errorLoading = error => {
  throw new Error(`Dynamic page loading failed: ${error}`)
}

const loadRoute = callback => {
  return module => callback(null, module.default);
}

const routes = (
  <Route path='/' component={ App } >

    <Route path='search' getComponent={ (location, cb) =>  { System.import('./search_index').then(loadRoute(cb)).catch(errorLoading) } } />
    <Route path='trending' getComponent={ (location, cb) =>  { System.import('./trending').then(loadRoute(cb)).catch(errorLoading) } } />

  </Route>
);

export default routes;
