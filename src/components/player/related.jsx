import React from 'react';
import YT_API_KEY from '../../../config/api_key';

class Related extends React.Component {

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${this.props.videoId}&key=${YT_API_KEY.publicDataKey}`)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
    })
    .catch(error => {
      console.error(error);
    })
  }

  render() {
    return (
      <div>
        Related
      </div>
    );
  }
}

export default Related;
