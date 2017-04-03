import merge  from 'lodash/merge';
import {
  RECEIVE_VIDEOS,
  CLEAR_VIDEOS } from "../actions/youtube_video_actions.js";

let _defaultState = {
  videos: null,
  nextPageToken: null,
  prevPageToken: null,
  pageInfo: null,
  query: null
};

const searchResultReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch(action.type) {
    case RECEIVE_VIDEOS:
      let res = action.videos;
      let videos = (state.videos || []).concat(res.items);

      return merge({}, state, {
        videos: videos,
        nextPageToken: res.nextPageToken,
        prevPageToken: res.prevPageToken,
        pageInfo: res.pageInfo,
        query: res.query
      });
    case CLEAR_VIDEOS:
      return _defaultState;
    default:
      return state;
  }
};

export default searchResultReducer;
