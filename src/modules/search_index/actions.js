import * as YoutubeApi from 'core/youtube_api';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const clearVideos = () => ({
  type: CLEAR_VIDEOS
});

// TODO: David - add it to youtube api and refactor this code
export const searchVideos = (query, nextPageToken) => dispatch => {
  let params = {
    q: query,
    type: 'video',
    pageToken: nextPageToken
  };

  return YoutubeApi.search(params).then(
    res => res.json()
  ).then(
    videos => {
      let newParams = {
        part: 'statistics,contentDetails',
        id: videos.items.map(item => item.id.videoId).join(',')
      };

      return YoutubeApi.videos(newParams).then(
         res => res.json()
       ).then(
         videoStatResults => {
           for (let i = 0; i < videoStatResults.items.length; i++) {
             videos.items[i].statistics = videoStatResults.items[i].statistics;
             videos.items[i].contentDetails = videoStatResults.items[i].contentDetails;
           }

           videos.query = query;

           return dispatch(receiveVideos(videos));
         }
       );
    }
  ).catch(
    err => console.log(err)
  );
};
