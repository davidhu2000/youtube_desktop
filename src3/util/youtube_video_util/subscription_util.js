import * as YoutubeApi from '../youtube_api';

export const fetchAuthUserSubscriptions = channelId => {
  let params = {
    channelId
  };
  return YoutubeApi.subscriptions(params);
};
