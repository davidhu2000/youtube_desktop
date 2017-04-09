import YT_API_KEY from '../../config/api_key';
import { createUrlParams } from '../helpers';

export const fetchComments = (videoId, context) => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';

  let params = {
    part: 'snippet,replies',
    videoId,
    key: YT_API_KEY.publicDataKey
  }

  let urlParams = createUrlParams(params);

  return fetch(`${baseUrl}?${urlParams}`)
    .then(response => response.json())
    .then(responseJson => {
      context.setState({ comments: responseJson.items });
    })
    .catch(error => {
      console.error(error);
    })
}

export const fetchDetails = (videoId, context) => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/videos';

  let params = {
    part: 'snippet',
    id: videoId,
    key: YT_API_KEY.publicDataKey
  }

  let urlParams = createUrlParams(params);

  return fetch(`${baseUrl}?${urlParams}`)
    .then(response => response.json())
    .then(responseJson => {
      context.setState({ details: responseJson.items[0].snippet });
    })
    .catch(error => {
      console.error(error);
    })
}

export const fetchRelated = (videoId, context) => {
  let baseUrl = `https://www.googleapis.com/youtube/v3/search`;

  let params = {
    part: 'snippet',
    type: 'video',
    relatedToVideoId: videoId,
    key: YT_API_KEY.publicDataKey
  }

  let urlParams = createUrlParams(params);

  return fetch(`${baseUrl}?${urlParams}`)
    .then(response => response.json())
    .then(responseJson => {
      context.setState({ vids: responseJson.items });
    })
    .catch(error => {
      console.error(error);
    })
}

export const fetchTrending = () => {
  let baseUrl = `https://www.googleapis.com/youtube/v3/videos`;

  let params = {
    part: 'snippet,statistics,contentDetails',
    chart: 'mostPopular',
    maxResults: 25,
    key: YT_API_KEY.publicDataKey
  }

  let urlParams = createUrlParams(params);
  return fetch(`${baseUrl}?${urlParams}`);
};

export const fetchVideos = (query, nextPageToken = null) => {
  let baseUrl = `https://www.googleapis.com/youtube/v3/search`;
  let params = {
    part: 'snippet',
    q: query,
    type: 'video',
    maxResults: 25,
    pageToken: nextPageToken,
    key: YT_API_KEY.publicDataKey
  }

  let urlParams = createUrlParams(params);
  return fetch(`${baseUrl}?${urlParams}`);
};

export const fetchChannelInfo = channelId => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/channels';
  let params = {
    part: 'snippet',
    id: channelId,
    key: YT_API_KEY.publicDataKey
  }

  let urlParams = createUrlParams(params);
  return fetch(`${baseUrl}?${urlParams}`);
}

// export const fetchChannelVideos = channelId => {
//   let baseUrl = 'https://www.googleapis.com/youtube/v3/search';
//   let params = {
//     part: 'snippet',
//     channelId,
//     maxResults: 15,
//     key: YT_API_KEY.publicDataKey
//   }
//
//   let urlParams = createUrlParams(params);
//   return fetch(`${baseUrl}?${urlParams}`);
// }

export const fetchCategories = () => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/guideCategories';
  let params = {
    part: 'snippet',
    regionCode: 'US',
    key: YT_API_KEY.publicDataKey
  }

  let urlParams = createUrlParams(params);
  return fetch(`${baseUrl}?${urlParams}`);
}

export const fetchAuthUserChannelId = () => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/channels';
  let params = {
    part: 'snippet',
    mine: 'true',
    access_token: localStorage.getItem('google-access-token')
  }

  let urlParams = createUrlParams(params);
  return fetch(`${baseUrl}?${urlParams}`);
}

export const fetchAuthUserSubscriptions = () => {

  return fetchAuthUserChannelId().then(
    res => res.json()
  ).then(
    resJson => {
      let channelId = resJson.items[0].id;

      let baseUrl = 'https://www.googleapis.com/youtube/v3/subscriptions';
      let params = {
        part: 'snippet',
        channelId,
        access_token: localStorage.getItem('google-access-token')
      }
      let urlParams = createUrlParams(params);
      return fetch(`${baseUrl}?${urlParams}`);
    }
  );
}

export const fetchChannelVideos = channelId => {
  let baseUrl = 'https://www.googleapis.com/youtube/v3/search';
  let params = {
    part: 'snippet',
    channelId,
    maxResults: 15,
    order: 'date',
    key: YT_API_KEY.publicDataKey
  }

  let urlParams = createUrlParams(params);
  return fetch(`${baseUrl}?${urlParams}`);
}
