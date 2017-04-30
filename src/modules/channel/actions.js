import * as YoutubeApi from 'core/youtube_api';

export const RECEIVE_CHANNEL_DETAIL = 'RECEIVE_CHANNEL_DETAIL';

export const receiveChannelDetail = detail => ({
  type: RECEIVE_CHANNEL_DETAIL,
  detail
});

export const fetchChannelDetails = channelId => dispatch => {
  let params = {
    id: channelId,
    part: 'snippet,statistics,brandingSettings',
    maxResults: 25
  };

  return YoutubeApi.channels(params).then(
    res => res.json()
  ).then(
    detail => dispatch(receiveChannelDetail(detail))
  ).catch(
    err => console.log(err)
  );
};
