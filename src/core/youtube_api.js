/* global fetch, localStorage, Headers */
import merge from 'lodash/merge';
import { createUrlParams } from 'helpers';
import YT_API_KEY from '../../config/api_key';

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

// to like or dislike a video
export const videosRate = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/videos/rate';

  let defaultParams = {
    access_token: localStorage.getItem('google-access-token'),
    key: YT_API_KEY.clientId,
    rating: "none"
  };
  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);

  return fetch(`${baseUrl}?${urlParams}`, { method: 'post' });
};

// to get current user's rating of video;
export const videosGetRating = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/videos/getRating';

  let defaultParams = {
    access_token: localStorage.getItem('google-access-token'),
    key: YT_API_KEY.clientId
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

export const playlists = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/playlists';

  let defaultParams = {
    part: 'snippet',
    maxResults: 25,
    key: YT_API_KEY.publicDataKey
  };

  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);

  return fetch(`${baseUrl}?${urlParams}`);
};

export const playlistItems = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';

  let defaultParams = {
    part: 'snippet',
    maxResults: 50,
    key: YT_API_KEY.publicDataKey
  };

  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);

  return fetch(`${baseUrl}?${urlParams}`);
};

export const subscriptions = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/subscriptions';

  let defaultParams = {
    part: 'snippet',
    access_token: localStorage.getItem('google-access-token'),
    maxResults: 25
  };

  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);

  return fetch(`${baseUrl}?${urlParams}`);
};

// TODO: refactor to make it reusable
export const subscriptionsInsert = snippet => {
  let accessToken = localStorage.getItem('google-access-token');
  let baseUrl = `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&access_token=${accessToken}`;
  let body = {
    snippet
  };

  let headers = new Headers({ "Content-Type": "application/json" });

  return fetch(baseUrl, {
    headers,
    body: JSON.stringify(body),
    method: 'POST'
  }).catch(
    err => console.log(err)
  );
};

export const subscriptionsDelete = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/subscriptions';

  let defaultParams = {
    access_token: localStorage.getItem('google-access-token')
  };

  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);
  return fetch(`${baseUrl}?${urlParams}`, { method: 'DELETE' });
};

export const commentThreads = params => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';

  let defaultParams = {
    part: 'snippet,replies',
    key: YT_API_KEY.publicDataKey
  };

  let mergedParams = merge(defaultParams, params);
  let urlParams = createUrlParams(mergedParams);

  return fetch(`${baseUrl}?${urlParams}`);
};

export const submitCommentThread = (videoId, channelId, textBody) => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';

  let params = {
    part: 'snippet',
    key: YT_API_KEY.publicDataKey,
    access_token: localStorage.getItem('google-access-token')
  };

  let urlParams = createUrlParams(params);

  let init = {
    method: 'POST',
    body: {
      'snippet': {
        'channelId': channelId,
        'videoId': videoId,
        'topLevelComment': {
          'snippet': {
            'textOriginal': textBody
          }
        }
      }
    }
  }

debugger
  return fetch(`${baseUrl}?${urlParams}`, init);
};
