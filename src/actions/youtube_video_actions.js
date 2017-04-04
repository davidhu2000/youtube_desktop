import * as YoutubeVideoAPI from '../util/youtube_video_util';

// Search Video Actions
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_TO_PAGE = 'GO_TO_PAGE';

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const clearVideos = () => ({
  type: CLEAR_VIDEOS
});

export const previousPage = () => ({
  type: PREVIOUS_PAGE
});

export const nextPage = () => ({
  type: NEXT_PAGE
});

export const goToPage = pageNumber => ({
  type: GO_TO_PAGE,
  pageNumber
})

export const searchVideos = (query, nextPageToken, pageNumber = 1) => dispatch => {

  return YoutubeVideoAPI.fetchVideos(query, nextPageToken).then(
    res => res.json()
  ).then(
    videos => {
      videos['query'] = query;
      videos['pageNumber'] = pageNumber;
      return dispatch(receiveVideos(videos))
    }
  ).catch(
    err => console.log(err)
  );
};

// Trending Actions
export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';

export const receiveTrending = videos => ({
  type: RECEIVE_TRENDING,
  videos
});

export const fetchTrending = () => dispatch => {
  return YoutubeVideoAPI.fetchTrending().then(
    res => res.json()
  ).then(
    videos => dispatch(receiveTrending(videos.items))
  ).catch(
    err => console.log(err)
  );
};

// Channel Actions

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL_VIDEOS = 'RECEIVE_CHANNEL_VIDEOS';

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveChannelVideos = videos => ({
  type: RECEIVE_CHANNEL,
  videos
});

export const fetchChannel = channelId => dispatch => {
  return YoutubeVideoAPI.fetchChannel(channelId).then(
    res => res.json()
  ).then(
    channels => dispatch(receiveChannel(channels.items[0]))
  ).catch(
    err => console.log(err)
  );
};

export const fetchChannelVideos = channelId => dispatch => {
  return YoutubeVideoAPI.fetchChannelVideos(channelId).then(
    res => res.json()
  ).then(
    videos => dispatch(receiveChannelVideos(videos.items))
  ).catch(
    err => console.log(err)
  );
};
