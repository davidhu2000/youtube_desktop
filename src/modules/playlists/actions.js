import * as YoutubeApi from 'core/youtube_api';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

export const receivePlaylists = list => ({
  type: RECEIVE_PLAYLISTS,
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
    channelId
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
