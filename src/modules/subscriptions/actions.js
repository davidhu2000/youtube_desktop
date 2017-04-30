import * as YoutubeApi from 'core/youtube_api';

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
  let params = {
    channelId
  };

  return YoutubeApi.subscriptions(params).then(
    res => res.json()
  ).then(
    resJson => dispatch(receiveSubscriptions(resJson.items))
  );
};

export const fetchSubscriptionUploads = channelId => dispatch => {
  let params = {
    channelId,
    order: 'date',
    maxResults: 15
  };

  return YoutubeApi.search(params).then(
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
