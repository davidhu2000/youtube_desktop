import YT_API_KEY from '../../config/api_key';

export const fetchRelated = videoId => {
  let baseUrl = "https://www.googleapis.com/youtube/v3/search";
  let part = "snippet";
  let type = "video";

  let fullUrl = `${baseurl}?part=${part}&type=${type}&relatedToVideoId=${videoId}&key=${YT_API_KEY.publicDataKey}`;

  return fetch(fullUrl);
};
