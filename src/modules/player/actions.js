import * as YoutubeApi from 'core/youtube_api';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = videoId => dispatch => {
  let params = { videoId };

  return YoutubeApi.commentThreads(params).then(
    response => response.json()
  ).then(responseJson => {
    if (responseJson.items) {
      dispatch(receiveComments(responseJson.items));
    } else if (responseJson.error && responseJson.error.code === 403) {
      dispatch(receiveComments('disabled'));
    }
  }).catch(error => {
    console.error(error);
  });
};

export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';

export const receiveDetails = details => ({
  type: RECEIVE_DETAILS,
  details
});

export const fetchDetails = videoId => dispatch => {
  let params = {
    id: videoId,
    part: 'snippet,statistics'
  };

  return YoutubeApi.videos(params).then(
    response => response.json()
  ).then(responseJson => {
    let details = responseJson.items[0];
    let channelId = responseJson.items[0].snippet.channelId;
    let newParams = {
      id: channelId,
      part: 'statistics,snippet'
    };

    return YoutubeApi.channels(newParams).then(
      subsResponse => subsResponse.json()
    ).then(subsResponseJson => {
      details.subs = subsResponseJson.items[0].statistics.subscriberCount;
      details.channelSnippet = subsResponseJson.items[0].snippet;
      dispatch(receiveDetails(details));
    }).catch(error => {
      console.error(error);
    });
  }).catch(error => {
    console.error(error);
  });
};

export const RECEIVE_VIDEO_RATING = 'RECEIVE_VIDEO_RATING';

export const receiveVideoRating = rating => ({
  type: RECEIVE_VIDEO_RATING,
  rating
});

export const fetchVideoRating = videoId => dispatch => {
  let params = {
    id: videoId
  };

  return YoutubeApi.videosGetRating(params).then(
    response => response.json()
  ).then(responseJson => {
    dispatch(receiveVideoRating(responseJson.items[0].rating));
  });
};

export const RECEIVE_RELATED = 'RECEIVE_RELATED';

export const receiveRelated = related => ({
  type: RECEIVE_RELATED,
  related
});

export const fetchRelated = videoId => dispatch => {
  let params = {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    relatedToVideoId: videoId
  };

  return YoutubeApi.search(params).then(
    response => response.json()
  ).then(responseJson => {
    dispatch(receiveRelated(responseJson.items));
  }).catch(error => {
    console.error(error);
  });
};

export const RECEIVE_AUTOPLAY = 'RECEIVE_AUTOPLAY';

export const receiveAutoplay = autoplay => ({
  type: RECEIVE_AUTOPLAY,
  autoplay
});

export const switchAutoplay = status => dispatch => {
  dispatch(receiveAutoplay(status));
};
