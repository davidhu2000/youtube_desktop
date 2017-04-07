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

export const RECEIVE_CHANNEL_INFO = 'RECEIVE_CHANNEL_INFO';
export const RECEIVE_CHANNEL_VIDEOS = 'RECEIVE_CHANNEL_VIDEOS';

export const receiveChannelInfo = channel => ({
  type: RECEIVE_CHANNEL_INFO,
  channel
});


export const receiveChannelVideos = videos => ({
  type: RECEIVE_CHANNEL_VIDEOS,
  videos
});

export const fetchChannelInfo = channelId => dispatch => {
  return YoutubeVideoAPI.fetchChannelInfo(channelId).then(
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

export const fetchCategories = () => dispatch => {
  // TODO: store in state ??

  YoutubeVideoAPI.fetchCategories().then(
    res => res.json()
  ).then (
    responseJson => {
      let channels = responseJson.items;
      console.log(channels);
      for(let i = 0; i < channels.length; i++) {
        let id = channels[i].snippet.channelId;
        console.log(id);
        // dispatch(fetchChannelVideos(id));
      }
    }
  ).catch(
    err => console.log(err)
  );
}
