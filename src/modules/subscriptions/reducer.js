import { merge } from 'lodash';
import { RECEIVE_SUBSCRIPTIONS,
         RECEIVE_SUBSCRIPTIONS_UPLOADS } from "./actions";

let _defaultState = {};

const subscriptionsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      let newState = {};
      action.subscriptions.forEach(sub => {
        sub.snippet.subscriptionId = sub.id;
        newState[sub.snippet.resourceId.channelId] = sub.snippet;
      });
      return newState;
    case RECEIVE_SUBSCRIPTIONS_UPLOADS:
      return merge({}, state, {
        [action.sub.channelId]: {
          videos: action.sub.videos
        }
      });
    default:
      return state;
  }
};

export default subscriptionsReducer;
