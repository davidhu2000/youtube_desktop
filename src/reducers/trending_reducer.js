import { merge } from 'lodash';
import {
  RECEIVE_TRENDING } from "../actions/youtube_video_actions.js";

let _defaultState = [];

const trendingReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TRENDING:
      return action.videos;
    default:
      return state;
  }
};

export default trendingReducer;
