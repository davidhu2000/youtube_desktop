import * as YoutubeApi from '../youtube_api';

export const fetchTrending = () => {
  let baseUrl = `https://www.googleapis.com/youtube/v3/videos`;

  let params = {
    part: 'snippet,statistics,contentDetails',
    chart: 'mostPopular',
  };

  return YoutubeApi.videos(params);
};
