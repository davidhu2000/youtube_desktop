/* global localStorage */
import * as YoutubeApi from 'core/youtube_api';

export const RECEIVE_CHANNEL_PLAYLISTS = 'RECEIVE_CHANNEL_PLAYLISTS';

export const receivePlaylists = list => ({
  type: RECEIVE_CHANNEL_PLAYLISTS,
  list
});

export const fetchAuthUserPlaylists = () => dispatch => {
  let params = {
    mine: 'true',
    access_token: localStorage.getItem('google-access-token')
  };

  return YoutubeApi.playlists(params).then(
    res => res.json()
  ).then(
    resJson => {
      let list = {
        playlists: resJson.items,
        channelId: resJson.items[0].snippet.channelId
      };
      return dispatch(receivePlaylists(list));
    }
  );
};

export const fetchChannelPlaylists = channelId => dispatch => {
  let params = {
    access_token: localStorage.getItem('google-access-token'),
    channelId,
    maxResults: 5 // TODO: remove after fixing bug
  };
  return YoutubeApi.playlists(params).then(
    res => res.json()
  ).then(
    resJson => {
      let list = {
        playlists: resJson.items,
        channelId
      };

      return dispatch(receivePlaylists(list));
    }
  );
};

export const RECEIVE_PLAYLIST_ITEMS = "RECEIVE_PLAYLIST_ITEMS";

export const receivePlaylistItems = list => ({
  type: RECEIVE_PLAYLIST_ITEMS,
  list
});

export const fetchPlaylistItems = playlistId => dispatch => {
  let params = {
    playlistId
  };

  return YoutubeApi.playlistItems(params).then(
    res => res.json()
  ).then(
    resJson => {
      let list = {
        playlistItems: resJson.items,
        playlistId
      };

      return dispatch(receivePlaylistItems(list));
    }
  );
};
