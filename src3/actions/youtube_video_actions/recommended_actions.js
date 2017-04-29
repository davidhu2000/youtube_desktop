import * as YoutubeVideoAPI from 'util/youtube_video_util';

export const RECEIVE_RECOMMENDED_VIDEOS = 'RECEIVE_RECOMMENDED_VIDEOS';

export const receiveRecommendedVideos = videos => ({
  type: RECEIVE_RECOMMENDED_VIDEOS,
  videos
});

export const fetchRecommendedVideos = () => dispatch => {
  return YoutubeVideoAPI.fetchRecommendedVideos().then(
    response => response.json()
  ).then(responseJson => {
    return dispatch(receiveRecommendedVideos(responseJson.items));
  }).catch(error => {
    console.log(error);
  });
};
