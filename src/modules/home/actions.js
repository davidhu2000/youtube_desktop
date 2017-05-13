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

  return YoutubeApi.channels(params).then(
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
    videos => {
      let newParams = {
        part: 'statistics,contentDetails',
        id: videos.items.map(item => item.id.videoId).join(',')
      };

      return YoutubeApi.videos(newParams).then(
        res => res.json()
      ).then(
        videoStatResults => {
          for (let i = 0; i < videoStatResults.items.length; i++) {
            videos.items[i].statistics = videoStatResults.items[i].statistics;
            videos.items[i].contentDetails = videoStatResults.items[i].contentDetails;
          }
          return dispatch(receiveChannelVideos(videos.items));
        }
      );
    }
  ).catch(
    err => console.log(err)
  );
};
