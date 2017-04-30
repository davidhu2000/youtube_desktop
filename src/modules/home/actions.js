import * as YoutubeApi from 'core/youtube_api';

export const RECEIVE_CHANNEL_INFO = 'RECEIVE_CHANNEL_INFO';

export const receiveChannelInfo = channel => ({
  type: RECEIVE_CHANNEL_INFO,
  channel
});

export const fetchChannelInfo = channelId => dispatch => {
  let params = {
    id: channelId
  };

  return YoutubeApi.channels(channelId).then(
    res => res.json()
  ).then(
    channels => dispatch(receiveChannelInfo(channels.items[0]))
  ).catch(
    err => console.log(err)
  );
};

export const RECEIVE_CHANNEL_VIDEOS = 'RECEIVE_CHANNEL_VIDEOS';

export const receiveChannelVideos = videos => ({
  type: RECEIVE_CHANNEL_VIDEOS,
  videos
});

export const fetchChannelVideos = channelId => dispatch => {
  let params = {
    channelId,
    order: 'date',
    maxResults: 15
  };

  return YoutubeApi.search(params).then(
    res => res.json()
  ).then(
    videos => dispatch(receiveChannelVideos(videos.items))
  ).catch(
    err => console.log(err)
  );
};
