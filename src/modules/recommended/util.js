import * as YoutubeApi from 'core/youtube_api';

export const fetchRecommendedVideos = () => {
  let params = {
    home: true,
    access_token: localStorage.getItem('google-access-token')
  };

  return YoutubeApi.activities(params);
};
