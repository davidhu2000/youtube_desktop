import * as YoutubeApi from './youtube_api';

export const videosRate = (videoId, rating) => {
  let params = {
    id: videoId,
    rating
  };

  return YoutubeApi.videosRate(params);
};