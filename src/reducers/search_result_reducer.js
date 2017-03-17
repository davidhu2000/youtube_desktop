import merge  from 'lodash/merge';
import {
  RECEIVE_VIDEOS,
  CLEAR_VIDEOS } from "../actions/search_result_actions.js";

let _defaultState = [];

const searchResultReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch(action.type) {
    case RECEIVE_VIDEOS:
      return merge([], state, action.videos);
    case CLEAR_VIDEOS:
      return _defaultState;
    default:
      return state;
  }
};

export default searchResultReducer;
