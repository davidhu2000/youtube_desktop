import YT_API_KEY from '../../config/api_key';

export const fetchComments = (videoId, context) => {
  return fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${YT_API_KEY.publicDataKey}`)
    .then(response => response.json())
    .then(responseJson => {
      // debugger
      context.setState({ comments: responseJson.items });
    })
    .catch(error => {
      console.error(error);
    })
}
