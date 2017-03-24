import React from 'react';
import YT_API_KEY from '../../../config/api_key';

class Comments extends React.Component {

  constructor(props) {
    super(props)

    this.state = { comments: [] }
  }

  componentDidMount() {
    this._fetchComments();
  }

  _fetchComments() {
    return fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${this.props.videoId}&key=${YT_API_KEY.publicDataKey}`)
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
        Comments
      </div>
    );
  }
}

export default Comments;
