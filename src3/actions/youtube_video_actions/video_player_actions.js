import * as YoutubeVideoAPI from 'util/youtube_video_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = videoId => dispatch => {
  return YoutubeVideoAPI.fetchComments(videoId).then(
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
  return YoutubeVideoAPI.fetchDetails(videoId).then(
    response => response.json()
  ).then(responseJson => {
    let details = responseJson.items[0];

    let channelId = responseJson.items[0].snippet.channelId;
    YoutubeVideoAPI.fetchChannelSubs(channelId).then(
      subsResponse => subsResponse.json()
    ).then(subsResponseJson => {
      details.subs = subsResponseJson.items[0].statistics.subscriberCount;
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
  return YoutubeVideoAPI.fetchVideoRating(videoId).then(
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
  return YoutubeVideoAPI.fetchRelated(videoId).then(
    response => response.json()
  ).then(responseJson => {
    dispatch(receiveRelated(responseJson.items));
  }).catch(error => {
    console.error(error);
  });
};
