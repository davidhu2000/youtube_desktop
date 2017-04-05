import merge from 'lodash/merge';
import {
  RECEIVE_VIDEOS,
  CLEAR_VIDEOS,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  GO_TO_PAGE } from "../actions/youtube_video_actions.js";

let _defaultState = {
  videos: null,
  pageInfo: null,
  nextPageToken: null,
  query: null,
  pageNumber: null
};

const searchResultReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch(action.type) {
    case RECEIVE_VIDEOS:
      let res = action.videos;

      return merge({}, state, {
        videos: { [res.pageNumber]: res.items },
        nextPageToken: res.nextPageToken,
        pageInfo: res.pageInfo,
        query: res.query,
        pageNumber: res.pageNumber
      });
    case CLEAR_VIDEOS:
      return _defaultState;
    case PREVIOUS_PAGE:
      return merge({}, state, {
        pageNumber: parseInt(state.pageNumber) - 1
      });
    case NEXT_PAGE:
      return merge({}, state, {
        pageNumber: parseInt(state.pageNumber) + 1
      });
    case GO_TO_PAGE:
      return merge({}, state, {
        pageNumber: action.pageNumber
      });
    default:
      return state;
  }
};

export default searchResultReducer;
