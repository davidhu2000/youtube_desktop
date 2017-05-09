/* global localStorage */
import * as YoutubeApi from 'core/youtube_api';
import { merge } from 'lodash';

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
    res => res.json()
  ).then(videos => {
    let newParams = {
      part: 'statistics,contentDetails',
      id: videos.items.map(item => item.contentDetails.upload.videoId).join(',')
    };

    return YoutubeApi.videos(newParams).then(
      res => res.json()
    ).then(stat => {
      for (let i = 0; i < videos.items.length; i++) {
        videos.items[i].statistics = stat.items[i].statistics;
        videos.items[i].contentDetails =
          merge(videos.items[i].contentDetails, stat.items[i].contentDetails);
      }

      return dispatch(receiveRecommendedVideos(videos.items));
    });
  }).catch(error => {
    console.log(error);
  });
};
