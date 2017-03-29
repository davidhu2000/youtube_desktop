import * as YoutubeVideoAPI from '../util/youtube_video_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const clearVideos = () => ({
  type: CLEAR_VIDEOS
});

export const searchVideos = query => dispatch => {
  return YoutubeVideoAPI.fetchVideos(query).then(
    res => res.json()
  ).then(
    videos => dispatch(receiveVideos(videos.items))
  ).catch(
    err => console.log(err)
  );
};

export const fetchTrending = () => dispatch => {
  return YoutubeVideoAPI.fetchTrending().then(
    res => res.json()
  ).then(
    videos => dispatch(receiveVideos(videos.items))
  ).catch(
    err => console.log(err)
  );
};
