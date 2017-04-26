import * as YoutubeVideoAPI from 'util/youtube_video_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_TO_PAGE = 'GO_TO_PAGE';

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const clearVideos = () => ({
  type: CLEAR_VIDEOS
});

export const previousPage = () => ({
  type: PREVIOUS_PAGE
});

export const nextPage = () => ({
  type: NEXT_PAGE
});

export const goToPage = pageNumber => ({
  type: GO_TO_PAGE,
  pageNumber
});

export const searchVideos = (query, nextPageToken, pageNumber = 1) => dispatch => {

  return YoutubeVideoAPI.fetchVideos(query, nextPageToken).then(
    res => res.json()
  ).then(
    videos => {
       YoutubeVideoAPI.fetchVideoStats(videos).then(
         res => res.json()
       ).then(
         videoStatResults => {
           for (let i = 0; i < videos.items.length; i++) {
             videos.items[i]['statistics'] = videoStatResults.items[i].statistics;
           }
 
           videos['query'] = query;
           videos['pageNumber'] = pageNumber;
 
           return dispatch(receiveVideos(videos));
         }
       );
    }
  ).catch(
    err => console.log(err)
  );
};
