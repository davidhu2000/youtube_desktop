import * as YoutubeApi from 'core/youtube_api';

export const RECEIVE_CHANNEL_DETAIL = 'RECEIVE_CHANNEL_DETAIL';

export const receiveChannelDetail = detail => ({
  type: RECEIVE_CHANNEL_DETAIL,
  detail
});

export const fetchChannelDetails = channelId => dispatch => {
  let params = {
    id: channelId,
    part: 'snippet,statistics,brandingSettings',
    maxResults: 25
  };

  return YoutubeApi.channels(params).then(
    res => res.json()
  ).then(
    detail => dispatch(receiveChannelDetail(detail))
  ).catch(
    err => console.log(err)
  );
};

export const RECEIVE_CHANNEL_VIDEOS = 'RECEIVE_CHANNEL_VIDEOS';

export const receiveChannelVideos = videos => ({
  type: RECEIVE_CHANNEL_VIDEOS,
  videos
});

export const fetchChannelVideos = channelId => dispatch => {
  let params = {
    part:'snippet',
    channelId,
    order: 'date',
    maxResults: 25
  };

  return YoutubeApi.search(params).then(
    res => res.json()
  ).then(
    videos => {
      console.log(videos);
      let params = {
        part: 'statistics,contentDetails',
        id: videos.items.map(item => item.id.videoId).join(',')
      };

      return YoutubeApi.videos(params).then(
        res => res.json()
      ).then( stat => {
        for (let i = 0; i < stat.items.length; i++) {
          videos.items[i]['statistics'] = stat.items[i].statistics;
          videos.items[i]['contentDetails'] = stat.items[i].contentDetails;
        }

        return dispatch(receiveChannelVideos(videos.items));
      });
    }
  ).catch(
    err => console.log(err)
  );
};

export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';

export const addSubscription = channelId => ({
  type: ADD_SUBSCRIPTION,
  channelId
});

export const insertSubscription = channelId => dispatch => {
  let snippet = {
    resourceId: {
      channelId,
      kind: "youtube#channel"
    }
  };

  return YoutubeApi.subscriptionsInsert(snippet).then(
    res => {
      console.log(res);
      dispatch(addSubscription(channelId))
    }
  ).catch(
    err => console.log(err)
  );
};
