import { merge } from 'lodash';
import { RECEIVE_USER } from "../actions/oauth_actions";
import { RECEIVE_MY_CHANNEL_ID } from "../actions/youtube_video_actions.js";

let _defaultState = {};

const userReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_MY_CHANNEL_ID:
      return merge({}, state, {
        myChannelId: action.myChannelId
      });
    default:
      return state;
  }
};

export default userReducer;
