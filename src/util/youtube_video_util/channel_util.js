import * as YoutubeApi from '../youtube_api';
import YT_API_KEY from '../../../config/api_key';
import { createUrlParams } from 'helpers';

export const fetchChannelInfo = channelId => {
  let params = {
    id: channelId
  };
  return YoutubeApi.channels(channelId);
};

export const fetchChannelSubs = channelId => {
  let params = {
    id: channelId,
    part: 'statistics'
  };

  return YoutubeApi.channels(params);
};

export const fetchChannelDetails = channelId => {
  let params = {
    id: channelId,
    part: 'snippet,statistics,brandingSettings',
    maxResults: 25
  };

  return YoutubeApi.channels(params);
}

export const fetchChannelVideos = channelId => {
  let params = {
    channelId,
    order: 'date',
    maxResults: 15
  };
  return YoutubeApi.search(params);
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
