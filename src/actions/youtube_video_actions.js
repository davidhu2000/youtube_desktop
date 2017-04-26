import * as YoutubeVideoAPI from '../util/youtube_video_util';

// Search Video Actions
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
            videos.items[i]['statistics']
              = videoStatResults.items[i].statistics;
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

// Trending Actions
export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';

export const receiveTrending = videos => ({
  type: RECEIVE_TRENDING,
  videos
});

export const fetchTrending = () => dispatch => {
  return YoutubeVideoAPI.fetchTrending().then(
    res => res.json()
  ).then(
    videos => dispatch(receiveTrending(videos.items))
  ).catch(
    err => console.log(err)
  );
};

// Channel Actions

export const RECEIVE_CHANNEL_INFO = 'RECEIVE_CHANNEL_INFO';
export const RECEIVE_CHANNEL_VIDEOS = 'RECEIVE_CHANNEL_VIDEOS';

export const receiveChannelInfo = channel => ({
  type: RECEIVE_CHANNEL_INFO,
  channel
});


export const receiveChannelVideos = videos => ({
  type: RECEIVE_CHANNEL_VIDEOS,
  videos
});

export const fetchChannelInfo = channelId => dispatch => {
  return YoutubeVideoAPI.fetchChannelInfo(channelId).then(
    res => res.json()
  ).then(
    channels => dispatch(receiveChannelInfo(channels.items[0]))
  ).catch(
    err => console.log(err)
  );
};

export const fetchChannelVideos = channelId => dispatch => {
  return YoutubeVideoAPI.fetchChannelVideos(channelId).then(
    res => res.json()
  ).then(
    videos => dispatch(receiveChannelVideos(videos.items))
  ).catch(
    err => console.log(err)
  );
};

export const fetchCategories = () => dispatch => {
  // TODO: store in state ??

  YoutubeVideoAPI.fetchCategories().then(
    res => res.json()
  ).then (
    responseJson => {
      let channels = responseJson.items;
      console.log(channels);
      for(let i = 0; i < channels.length; i++) {
        let id = channels[i].snippet.channelId;
        console.log(id);
        // dispatch(fetchChannelVideos(id));
      }
    }
  ).catch(
    err => console.log(err)
  );
};

// subscription actions

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const RECEIVE_SUBSCRIPTIONS_UPLOADS = 'RECEIVE_SUBSCRIPTIONS_UPLOADS';

export const receiveSubscriptions = subscriptions => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

export const receiveSubscriptionsUploads = sub => ({
  type: RECEIVE_SUBSCRIPTIONS_UPLOADS,
  sub
});

export const fetchSubscriptions = () => dispatch => {
  return YoutubeVideoAPI.fetchAuthUserSubscriptions().then(
    res => res.json()
  ).then(
    resJson => dispatch(receiveSubscriptions(resJson.items))
  );
};

export const fetchSubscriptionUploads = channelId => dispatch => {
  return YoutubeVideoAPI.fetchChannelVideos(channelId).then(
    res => res.json()
  ).then(
    resJson => {
      let sub = {
        channelId,
        videos: resJson.items
      };
      return dispatch(receiveSubscriptionsUploads(sub));
    }
  );
};

// Video Player Page Actions
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

// recommended actions
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
