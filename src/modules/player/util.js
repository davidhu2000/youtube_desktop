import * as YoutubeApi from 'core/youtube_api';
import YT_API_KEY from '../../../config/api_key';
import { createUrlParams } from 'helpers';

export const fetchComments = videoId => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';

  let params = {
    part: 'snippet,replies',
    videoId,
    key: YT_API_KEY.publicDataKey
  };

  let urlParams = createUrlParams(params);
  return fetch(`${baseUrl}?${urlParams}`);
};

export const fetchDetails = videoId => {

  let params = {
    id: videoId,
    part: 'snippet,statistics'
  };
  return YoutubeApi.videos(params);
};

export const fetchVideoRating = videoId => {
  let params = {
    id: videoId,
  };
  return YoutubeApi.videosGetRating(params);
};

export const fetchRelated = videoId => {
  let params = {
    type: 'video',
    maxResults: 10,
    relatedToVideoId: videoId,
  };
  return YoutubeApi.search(params);
};

// TODO: possibly remove duplicate
export const fetchChannelSubs = channelId => {
  let params = {
    id: channelId,
    part: 'statistics'
  };

  return YoutubeApi.channels(params);
};
