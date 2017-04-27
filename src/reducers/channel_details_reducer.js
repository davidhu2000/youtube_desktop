import { merge } from 'lodash';
import { RECEIVE_CHANNEL_DETAILS } from "actions/youtube_video_actions";

let _defaultState = {};

const channelDetailsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch(action.type) {
    case RECEIVE_CHANNEL_DETAILS:
      return action.channelDetails;
    default:
      return state;
  }
};

export default channelDetailsReducer;
