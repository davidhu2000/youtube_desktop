/* global System */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

const errorLoading = error => {
  throw new Error(`Dynamic page loading failed: ${error}`);
};

const loadRoute = callback => {
  return module => callback(null, module.default);
};

const routes = (
  <Route path='/' component={App}>
    <IndexRoute getComponent={(location, cb) => {
      System.import('modules/home/components').then(loadRoute(cb)).catch(errorLoading);
    }}/>

    <Route path='search' getComponent={(location, cb) => {
      System.import('modules/search_index/components').then(loadRoute(cb)).catch(errorLoading);
    }}/>

    <Route path='trending' getComponent={(location, cb) => {
      System.import('modules/trending/components').then(loadRoute(cb)).catch(errorLoading);
    }}/>

    <Route path='watch/:videoId' getComponent={(location, cb) => {
      System.import('modules/player/components').then(loadRoute(cb)).catch(errorLoading);
    }}/>

    <Route path='channels/:channelId' getComponent={(location, cb) => {
      System.import('modules/channel').then(loadRoute(cb)).catch(errorLoading);
    }}/>

    <Route path='subscriptions' getComponent={(location, cb) => {
      System.import('modules/subscriptions/components').then(loadRoute(cb)).catch(errorLoading);
    }}/>

    <Route path='home' getComponent={(location, cb) => {
      System.import('modules/home/components').then(loadRoute(cb)).catch(errorLoading);
    }}/>

    <Route path='*' getComponent={(location, cb) => {
      System.import('modules/home/components').then(loadRoute(cb)).catch(errorLoading);
    }}/>

  </Route>
);

export default routes;
