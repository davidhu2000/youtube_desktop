import { merge } from 'lodash';
import {
  RECEIVE_SUBSCRIPTIONS } from "../actions/youtube_video_actions.js";

let _defaultState = [];

const subscriptionsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      return action.subscriptions;
    default:
      return state;
  }
};

export default subscriptionsReducer;
