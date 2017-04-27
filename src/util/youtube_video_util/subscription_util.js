import * as YoutubeApi from '../youtube_api';
import { createUrlParams } from 'helpers';

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
        access_token: localStorage.getItem('google-access-token'),
        maxResults: 25
      };
      let urlParams = createUrlParams(params);
      return fetch(`${baseUrl}?${urlParams}`);
    }
  );
};
