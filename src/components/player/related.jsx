import React            from 'react';
import RelatedListItem  from './related_list_item';
import { fetchRelated } from '../../util/youtube_video_util';
import YT_API_KEY       from '../../../config/api_key';

class Related extends React.Component {

  constructor(props) {
    super(props)

    this.state = { vids: [] };
  }

  componentDidMount() {
    fetchRelated(this.props.videoId, this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.videoId !== this.props.videoId) {
      fetchRelated(this.props.videoId, this);
    }
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
        <div className="related-title">
          <h2>Up Next</h2>
          <h2>autoplay</h2>
        </div>

        <div className="related-list">
          {this.renderRelatedVideos()}
        </div>
      </div>
    );
  }
}

export default Related;
