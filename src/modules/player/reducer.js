import merge from 'lodash/merge';
import { RECEIVE_COMMENTS,
         RECEIVE_DETAILS,
         RECEIVE_VIDEO_RATING,
         RECEIVE_RELATED,
         RECEIVE_AUTOPLAY } from './actions';

let _defaultState = {
  comments: [],
  details: {},
  rating: 'none',
  related: [],
  autoplay: true
};

const playerDetailsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, {
        comments: action.comments
      });
    case RECEIVE_DETAILS:
      return merge({}, state, {
        details: action.details
      });
    case RECEIVE_VIDEO_RATING:
      return merge({}, state, {
        rating: action.rating
      });
    case RECEIVE_RELATED:
      return merge({}, state, {
        related: action.related
      });
    case RECEIVE_AUTOPLAY:
      return merge({}, state, {
        autoplay: action.autoplay
      });
    default:
      return state;
  }
};

export default playerDetailsReducer;
