import { RECEIVE_TRENDING } from "./actions";

let _defaultState = {
  date: null,
  videos: null
};

const trendingReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRENDING:
      return {
        date: Date.now(),
        videos: action.videos
      };
    default:
      return state;
  }
};

export default trendingReducer;
