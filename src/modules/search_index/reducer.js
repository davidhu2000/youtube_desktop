import merge from 'lodash/merge';
import { RECEIVE_VIDEOS, CLEAR_VIDEOS } from "./actions";

let _defaultState = {
  videos: [],
  pageInfo: null,
  nextPageToken: null,
  query: null
};

const searchResultReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_VIDEOS:
      let res = action.videos;

      return merge({}, state, {
        videos: state.videos.concat(res.items),
        nextPageToken: res.nextPageToken,
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
