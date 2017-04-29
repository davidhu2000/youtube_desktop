import * as YoutubeVideoAPI from 'util/youtube_video_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

export const receivePlaylists = list => ({
  type: RECEIVE_PLAYLISTS,
  list
});

export const fetchAuthUserPlaylists = () => dispatch => {
  return YoutubeVideoAPI.fetchAuthUserPlaylists().then(
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
  return YoutubeVideoAPI.fetchChannelPlaylists(channelId).then(
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

// TODO: remove this
window.fetchAuthUserPlaylists = fetchAuthUserPlaylists;
window.fetchChannelPlaylists = fetchChannelPlaylists;
