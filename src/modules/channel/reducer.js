import { merge } from 'lodash';
import { RECEIVE_CHANNEL_DETAIL,
         RECEIVE_CHANNEL_VIDEOS } from "./actions";

let _defaultState = {};

const channelDetailsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_DETAIL:
      return merge({}, state, {
        detail: action.detail.items[0]
      });
    case RECEIVE_CHANNEL_VIDEOS:
      return merge({}, state, {
        videos: action.videos
      });
    default:
      return state;
  }
};

export default channelDetailsReducer;
