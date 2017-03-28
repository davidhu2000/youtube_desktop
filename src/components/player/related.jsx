import React from 'react';
import RelatedListItem from './related_list_item';
import { fetchRelated } from '../../util/youtube_video_util';
import YT_API_KEY from '../../../config/api_key';

class Related extends React.Component {

  constructor(props) {
    super(props)

    this.state = { vids: [] };
  }

  componentDidMount() {
    fetchRelated(this.props.videoId, this);
  }

  renderRelatedVideos() {
    if (this.state.vids.length !== 0) {
      let vids = this.state.vids;
      return vids.map(vid => <RelatedListItem key={vid.etag} vid={vid} />)
    }
  }

  render() {
    return (
      <div className="related-container">
        <h2 className="related-title">Related Videos</h2>
        <div className="related-list">
          {this.renderRelatedVideos()}
        </div>
      </div>
    );
  }
}

export default Related;
