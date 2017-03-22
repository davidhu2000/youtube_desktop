import React from 'react';
import RelatedListItem from './related_list_item';
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

  renderRelatedVideos() {
    if (this.state.vids.length !== 0) {
      let vids = this.state.vids;
      return vids.map(vid => <RelatedListItem vid={vid} />)
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="related-container">
        <div className="related-list">
          {this.renderRelatedVideos()}
        </div>
      </div>
    );
  }
}

export default Related;
