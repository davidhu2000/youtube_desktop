import YT_API_KEY from '../../config/api_key';
import { createUrlParams } from '../helpers';

export const fetchComments = (videoId, context) => {
  return fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${YT_API_KEY.publicDataKey}`)
    .then(response => response.json())
    .then(responseJson => {
      context.setState({ comments: responseJson.items });
    })
    .catch(error => {
      console.error(error);
    })
}

export const fetchDetails = (videoId, context) => {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YT_API_KEY.publicDataKey}`)
    .then(response => response.json())
    .then(responseJson => {
      context.setState({ details: responseJson.items[0].snippet });
    })
    .catch(error => {
      console.error(error);
    })
}

export const fetchRelated = (videoId, context) => {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${videoId}&key=${YT_API_KEY.publicDataKey}`)
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
  let part ='statistics,snippet';
  let chart = 'mostPopular';
  // let regionCode = '';
  let maxResults = 25;

  let fullUrl = `${baseUrl}?part=${part}&chart=${chart}&maxResults=${maxResults}&key=${YT_API_KEY.publicDataKey}`;

  return fetch(fullUrl);
};

export const fetchVideos = query => {
  let baseUrl = `https://www.googleapis.com/youtube/v3/search`;

  let params = {
    part: 'snippet',
    query,
    type: 'video',
    maxResults: 25,
    key: YT_API_KEY.publicDataKey
  }

  let urlParams = createUrlParams(params);

  let fullUrl = `${baseUrl}?${urlParams}`;

  return fetch(fullUrl);
};
