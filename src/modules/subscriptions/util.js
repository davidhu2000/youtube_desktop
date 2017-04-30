import * as YoutubeApi from 'core/youtube_api';

export const fetchAuthUserSubscriptions = channelId => {
  let params = {
    channelId
  };
  return YoutubeApi.subscriptions(params);
};

// TODO: possibly remove duplicate
export const fetchChannelVideos = channelId => {
  let params = {
    channelId,
    order: 'date',
    maxResults: 15
  };
  return YoutubeApi.search(params);
};
