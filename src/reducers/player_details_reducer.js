import { RECEIVE_COMMENTS,
         RECEIVE_DETAILS,
         RECEIVE_VIDEO_RATING,
         RECEIVE_RELATED } from 'actions/youtube_video_actions';
import merge from 'lodash/merge';

let _defaultState = {
  comments: [],
  details: {},
  rating: 'none',
  related: [],
  autoplay: true
};

const playerDetailsReducer = ( state = _defaultState, action ) => {
  Object.freeze(state);
  // console.log(action);

  switch(action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, {
        comments: action.comments
      });
    case RECEIVE_DETAILS:
      return merge({}, state, {
        details: action.details
      });
    case RECEIVE_VIDEO_RATING:
      console.log(action)
      return merge({}, state, {
        rating: action.rating
      });
    case RECEIVE_RELATED:
      return merge({}, state, {
        related: action.related
      });
    default:
      return state;
  }
};

export default playerDetailsReducer;
