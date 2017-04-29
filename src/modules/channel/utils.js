import * as YoutubeApi from 'core/youtube_api';
import YT_API_KEY from '../../../config/api_key';
import { createUrlParams } from 'helpers';

export const fetchChannelDetails = channelId => {
  let params = {
    id: channelId,
    part: 'snippet,statistics,brandingSettings',
    maxResults: 25
  };

  return YoutubeApi.channels(params);
}