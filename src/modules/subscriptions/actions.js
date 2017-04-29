import * as YoutubeVideoAPI from './util';

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const RECEIVE_SUBSCRIPTIONS_UPLOADS = 'RECEIVE_SUBSCRIPTIONS_UPLOADS';

export const receiveSubscriptions = subscriptions => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

export const receiveSubscriptionsUploads = sub => ({
  type: RECEIVE_SUBSCRIPTIONS_UPLOADS,
  sub
});

export const fetchSubscriptions = channelId => dispatch => {
  return YoutubeVideoAPI.fetchAuthUserSubscriptions(channelId).then(
    res => res.json()
  ).then(
    resJson => dispatch(receiveSubscriptions(resJson.items))
  );
};

export const fetchSubscriptionUploads = channelId => dispatch => {
  return YoutubeVideoAPI.fetchChannelVideos(channelId).then(
    res => res.json()
  ).then(
    resJson => {
      let sub = {
        channelId,
        videos: resJson.items
      };
      return dispatch(receiveSubscriptionsUploads(sub));
    }
  );
};
