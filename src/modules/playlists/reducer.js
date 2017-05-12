import { merge, keyBy } from 'lodash';
import { RECEIVE_CHANNEL_PLAYLISTS,
         RECEIVE_PLAYLIST_ITEMS } from "./actions";

let _defaultState = {
  channelId: null,
  list: {}
};

const playlistsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_PLAYLISTS:
      return merge({}, {
        channelId: action.list.channelId,
        list: keyBy(action.list.playlists, 'id')
      });
    case RECEIVE_PLAYLIST_ITEMS:
      return merge({}, state, {
        list: {
          [action.list.playlistId]: {
            items: action.list.playlistItems
          }
        }
      });
    default:
      return state;
  }
};

export default playlistsReducer;
