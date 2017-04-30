import * as YoutubeApi from 'core/youtube_api';

export const RECEIVE_RECOMMENDED_VIDEOS = 'RECEIVE_RECOMMENDED_VIDEOS';

export const receiveRecommendedVideos = videos => ({
  type: RECEIVE_RECOMMENDED_VIDEOS,
  videos
});

export const fetchRecommendedVideos = () => dispatch => {
  let params = {
    home: true,
    access_token: localStorage.getItem('google-access-token')
  };

  return YoutubeApi.activities(params).then(
    response => response.json()
  ).then(responseJson => {
    return dispatch(receiveRecommendedVideos(responseJson.items));
  }).catch(error => {
    console.log(error);
  });
};
