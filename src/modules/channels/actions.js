import * as YoutubeVideoAPI from './utils.js';

export const RECEIVE_CHANNEL_DETAIL = 'RECEIVE_CHANNEL_DETAIL';

export const receiveChannelDetail = detail => ({
  type: RECEIVE_CHANNEL_DETAIL,
  detail
});

export const fetchChannelDetails = channelId => dispatch => {
  return YoutubeVideoAPI.fetchChannelDetails(channelId).then(
    res => res.json()
  ).then(
    detail => dispatch(receiveChannelDetail(detail))
  ).catch(
    err => console.log(err)
  );
};
