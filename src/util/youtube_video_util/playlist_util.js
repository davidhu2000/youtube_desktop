import * as YoutubeApi from '../youtube_api';
import { createUrlParams } from 'helpers';

export const fetchAuthUserPlaylists = () => {
  let params = {
    mine: 'true',
    access_token: localStorage.getItem('google-access-token')
  };
  return YoutubeApi.playlists(params);
};

export const fetchChannelPlaylists = (channelId) => {
  let params = {
    access_token: localStorage.getItem('google-access-token'),
    channelId
  };
  return YoutubeApi.playlists(params);
};
