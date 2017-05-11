import { RECEIVE_RECOMMENDED_VIDEOS } from "./actions";

let _defaultState = {
  videos: null
};

const recommendedReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RECOMMENDED_VIDEOS:
      return {
        videos: action.videos
      };
    default:
      return state;
  }
};

export default recommendedReducer;
