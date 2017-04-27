import * as YoutubeVideoAPI from 'util/youtube_video_util';

export const fetchComments = (videoId, context) => {
  return YoutubeVideoAPI.fetchComments(videoId).then(
    response => response.json()
  ).then(responseJson => {
    if (responseJson.items) {
      context.setState({ comments: responseJson.items });
    } else if (responseJson.error && responseJson.error.code === 403) {
      context.setState({ comments: "disabled" });
    }
  }).catch(error => {
    console.error(error);
  });
};

export const fetchDetails = (videoId, context) => {
  return YoutubeVideoAPI.fetchDetails(videoId).then(
    response => response.json()
  ).then(responseJson => {
    let details = responseJson.items[0];

    let channelId = responseJson.items[0].snippet.channelId;
    YoutubeVideoAPI.fetchChannelSubs(channelId).then(
      subsResponse => subsResponse.json()
    ).then(subsResponseJson => {
      context.setState({
        subs: subsResponseJson.items[0].statistics.subscriberCount ,
        details,
      });
    }).catch(error => {
      console.error(error);
    });
  }).catch(error => {
    console.error(error);
  });
};

export const fetchVideoRating = (videoId, context) => {
  return YoutubeVideoAPI.fetchVideoRating(videoId).then(
    response => response.json()
  ).then(responseJson => {
    context.setState({ rating: responseJson.items[0].rating });
  });
};

export const fetchRelated = (videoId, context) => {
  return YoutubeVideoAPI.fetchRelated(videoId).then(
    response => response.json()
  ).then(responseJson => {
    context.setState({ vids: responseJson.items });
  }).catch(error => {
    console.error(error);
  });
};
