import * as SearchResultAPI from '../util/search_result_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const clearVideos = () => ({
  type: CLEAR_VIDEOS
});

export const searchVideos = query => dispatch => (
  SearchResultAPI.fetchVideos(query).then(
    res => dispatch(receiveVideos(res))
  ).catch(
    err => console.log(err.responseJSON)
  )
)
