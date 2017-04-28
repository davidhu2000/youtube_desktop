import * as YoutubeVideoAPI from 'util/youtube_video_util';
import { receiveSetting } from '../setting_actions';

export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';

export const receiveTrending = videos => ({
  type: RECEIVE_TRENDING,
  videos
});

export const fetchTrending = () => dispatch => {
  return YoutubeVideoAPI.fetchTrending().then(
    res => res.json()
  ).then(
    videos => {
      console.log('trending api')
      dispatch(receiveTrending(videos.items));
      return dispatch(receiveSetting({ isLoading: false }));
    }
  ).catch(
    err => console.log(err)
  );
};
