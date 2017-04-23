import merge from 'lodash/merge';
import YT_API_KEY from '../../config/api_key';
import { createUrlParams } from '../helpers';

export const search = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/search';

  let defaultParams = {
    part: 'snippet',
    maxResults: 25,
    key: YT_API_KEY.publicDataKey
  };

  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);
  return fetch(`${baseUrl}?${urlParams}`);
};

export const videos = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/videos';

  let defaultParams = {
    part: 'snippet',
    maxResults: 25,
    key: YT_API_KEY.publicDataKey
  };

  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);
  return fetch(`${baseUrl}?${urlParams}`);
};

export const channels = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/channels';

  let defaultParams = {
    part: 'snippet',
    key: YT_API_KEY.publicDataKey
  };

  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);
  return fetch(`${baseUrl}?${urlParams}`);
};

export const activities = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/activities';

  let defaultParams = {
    part: 'snippet,contentDetails',
    maxResults: 24
  };

  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);

  return fetch(`${baseUrl}?${urlParams}`);
};