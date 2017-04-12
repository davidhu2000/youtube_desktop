import * as YoutubeVideoAPI from 'util/youtube_video_util/index.js';

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
    channels => dispatch(receiveChannelInfo(channels.items[0]))
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

export const RECEIVE_MY_CHANNEL_ID = 'RECEIVE_MY_CHANNEL_ID';

export const receiveMyChannelId = myChannelId => ({
  type: RECEIVE_MY_CHANNEL_ID,
  myChannelId
});

export const fetchChannelId = () => dispatch => {
  return YoutubeVideoAPI.fetchAuthUserChannelId().then(
    response => response.json()
  ).then(
    responseJson => dispatch(receiveMyChannelId(responseJson.items[0].id))
  );
};

// Channel Detail Actions
export const RECEIVE_CHANNEL_DETAILS = 'RECEIVE_CHANNEL_DETAILS';

export const receiveChannelDetails = channelDetails => ({
  type: RECEIVE_CHANNEL_DETAILS,
  channelDetails
});

export const fetchChannelDetails = channelId => dispatch => {
  return YoutubeVideoAPI.fetchChannelDetails(channelId).then(
    response => response.json()
  ).then(
    responseJson => dispatch(receiveChannelDetails(responseJson.items))
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
};
