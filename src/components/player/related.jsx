import React from 'react';
import YT_API_KEY from '../../../config/api_key';

class Related extends React.Component {

  constructor(props) {
    super(props)

    this.state = { vids: [] };
  }

  componentDidMount() {
    this._fetchRelated();
  }

  _fetchRelated() {
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${this.props.videoId}&key=${YT_API_KEY.publicDataKey}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ vids: responseJson.items});
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Related
      </div>
    );
  }
}

export default Related;
