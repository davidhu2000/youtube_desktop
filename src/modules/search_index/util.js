import * as YoutubeApi from 'core/youtube_api';
import YT_API_KEY from '../../../config/api_key';
import { createUrlParams } from 'helpers';

export const fetchVideos = (query, nextPageToken = null) => {
  let params = {
    q: query,
    type: 'video',
    pageToken: nextPageToken,
  };

  return YoutubeApi.search(params);
};

export const fetchVideoStats = videos => {
  let params = {
    part: 'statistics',
    id: videos.items.map(item => item.id.videoId).join(','),
  };

  return YoutubeApi.videos(params);
};
