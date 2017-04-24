import merge from 'lodash/merge';
import * as YoutubeApi from './youtube_api';
import YT_API_KEY from '../../config/api_key';
import { createUrlParams } from '../helpers';

export const fetchComments = videoId => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';

  let params = {
    part: 'snippet,replies',
    videoId,
    key: YT_API_KEY.publicDataKey
  };

  let urlParams = createUrlParams(params);

  return fetch(`${baseUrl}?${urlParams}`)
};

export const fetchDetails = videoId => {

  let params = {
    id: videoId,
  };
  return YoutubeApi.videos(params);
};

export const fetchRelated = videoId => {
  let params = {
    type: 'video',
    maxResults: 10,
    relatedToVideoId: videoId,
  };
  return YoutubeApi.search(params);
};

export const fetchTrending = () => {
  let baseUrl = `https://www.googleapis.com/youtube/v3/videos`;

  let params = {
    part: 'snippet,statistics,contentDetails',
    chart: 'mostPopular',
  };

  return YoutubeApi.videos(params);
};

export const fetchVideos = (query, nextPageToken = null) => {
  let params = {
    q: query,
    type: 'video',
    pageToken: nextPageToken,
  };

  return YoutubeApi.search(params);
};

export const fetchChannelInfo = channelId => {
  let params = {
    id: channelId
  };
  return YoutubeApi.channels(channelId);
};

export const fetchCategories = () => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/guideCategories';
  let params = {
    part: 'snippet',
    regionCode: 'US',
    key: YT_API_KEY.publicDataKey
  };

  let urlParams = createUrlParams(params);
  return fetch(`${baseUrl}?${urlParams}`);
};

export const fetchAuthUserChannelId = () => {
  let params = {
    mine: 'true',
    access_token: localStorage.getItem('google-access-token')
  };
  return YoutubeApi.channels(params);
};

export const fetchAuthUserSubscriptions = () => {

  return fetchAuthUserChannelId().then(
    res => res.json()
  ).then(
    resJson => {
      let channelId = resJson.items[0].id;

      let baseUrl = 'https://www.googleapis.com/youtube/v3/subscriptions';
      let params = {
        part: 'snippet',
        channelId,
        access_token: localStorage.getItem('google-access-token')
      };
      let urlParams = createUrlParams(params);
      return fetch(`${baseUrl}?${urlParams}`);
    }
  );
};

export const fetchChannelVideos = channelId => {
  let params = {
    channelId,
    order: 'date',
    maxResults: 15
  };

  return YoutubeApi.search(params);
};

export const fetchChannelDetails = channelId => {
  let params = {
    // part: 'snippet',
    part: 'statistics',
    channelId,
    maxResults: 25,
    key: YT_API_KEY.publicDataKey
  };

  return YoutubeApi.search(params);
}

export const fetchRecommendedVideos = () => {
  let params = {
    home: true,
    access_token: localStorage.getItem('google-access-token')
  };

  return YoutubeApi.activities(params);
};
