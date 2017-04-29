import { merge } from 'lodash';
import { RECEIVE_PLAYLISTS } from "../actions/youtube_video_actions";

let _defaultState = {};

const playlistsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return merge({}, state, {
        [action.list.channelId]: action.list.playlists
      });
    default:
      return state;
  }
};

export default playlistsReducer;
