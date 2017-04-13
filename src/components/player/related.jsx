import React            from 'react';
import RelatedListItem  from './related_list_item';
import { fetchRelated } from '../../actions/youtube_video_actions';
import YT_API_KEY       from '../../../config/api_key';

class Related extends React.Component {

  constructor(props) {
    super(props)

    this.state = { vids: [], autoplay: true };
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

  updateAutoplay(e) {
    this.setState({
      autoplay: e.target.checked
    })
  }

  render() {
    return (
      <div className="related-container">
        <div className="related-title">
          <h2>Up Next</h2>
          <h2>autoplay</h2>
          <div className="row press">
            <input
              type="checkbox"
              id="checked"
              checked={this.state.autoplay}
              onChange={this.updateAutoplay.bind(this)}
              className="cbx hidden"/>
            <label htmlFor="checked" className="lbl"></label>
          </div>
        </div>

        <div className="related-list">
          {this.renderRelatedVideos()}
        </div>
      </div>
    );
  }
}

export default Related;
