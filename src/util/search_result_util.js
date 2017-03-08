import YT_API_KEY from '../../config/api_key';

export const fetchVideos = query => {
  let base_url = `https://www.googleapis.com/youtube/v3/search`;
  let part ='snippet';
  let type = 'video';

  let full_url = `${base_url}?part=${part}&q=${query}&type=${type}&key=${YT_API_KEY.publicDataKey}`;

  return fetch(full_url);
};
