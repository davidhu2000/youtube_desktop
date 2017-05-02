import { merge } from 'lodash';
import { RECEIVE_PLAYLISTS,
         RECEIVE_PLAYLIST_ITEMS } from "./actions";

let _defaultState = {};

const playlistsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return merge({}, state, {
        [action.list.channelId]: action.list.playlists
      });
    case RECEIVE_PLAYLIST_ITEMS:
      return merge({}, state, {
        playlistsList: {
          [action.list.playlistId]: action.list.playlistItems
        }
      });
    default:
      return state;
  }
};

export default playlistsReducer;
