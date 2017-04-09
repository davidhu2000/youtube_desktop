import { merge } from 'lodash';
import {
  RECEIVE_CHANNEL_INFO,
  RECEIVE_CHANNEL_VIDEOS } from "../actions/youtube_video_actions.js";

let _defaultState = {};

const trendingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch(action.type) {
    case RECEIVE_CHANNEL_INFO:
      return merge({}, state, {
        [action.channel.id]: action.channel
      });
    case RECEIVE_CHANNEL_VIDEOS:
      return merge({}, state, {
        [action.videos[0].snippet.channelId]:{
          videos: action.videos
        }
      });
    default:
      return state;
  }
};

export default trendingReducer;
