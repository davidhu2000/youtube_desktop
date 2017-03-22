import YT_API_KEY from '../../config/api_key';

export const fetchTrending = () => {
  let baseUrl = `https://www.googleapis.com/youtube/v3/videos`;
  let part ='snippet';
  let chart = 'mostPopular';
  // let regionCode = '';
  let maxResults = 25;

  let fullUrl = `${baseUrl}?part=${part}&chart=${chart}&maxResults=${maxResults}&key=${YT_API_KEY.publicDataKey}`;

  return fetch(fullUrl);
};
