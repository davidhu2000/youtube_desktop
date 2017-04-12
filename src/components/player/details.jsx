import React            from 'react';
import YT_API_KEY       from '../../../config/api_key';
import { parseDate }    from '../../helpers';
import { fetchDetails } from '../../actions/youtube_video_actions';

class Details extends React.Component {

  constructor(props) {
    super(props);

    this.state = { details: {} };
  }

  componentDidMount() {
    fetchDetails(this.props.videoId, this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.videoId !== this.props.videoId) {
      fetchDetails(this.props.videoId, this);
    }
  }

  addDescription() {
    if (this.state.details.snippet.description){
      let descript = this.state.details.snippet.description.slice(0,200);
      return <p className="description">{descript + "..."}</p>;
    }
  }

  render() {

    if (!this.state.details.snippet) {
      return (<div></div>)
    }

    return (
      <div className="details-container">
        <span className="title">{this.state.details.snippet.title}</span>
        <a href="" className="channel-name">{this.state.details.snippet.channelTitle}</a>
        <button type="button" className="sub-button">
          <i className="material-icons">play_arrow</i>
          <span>Subscribe</span>
        </button>
        <span>Subs total</span>
        <span className="total-views">{this.state.details.statistics.viewCount}</span>
        <button type="button" className="add-button">
          <i className="material-icons">add</i>
          <span>Add to</span>
        </button>
        <button type="button" className="share-button">
          <i className="material-icons">share</i>
          <span>Share</span>
        </button>
        <button type="button" className="like-button">
          <i className="material-icons">thumb_up</i>
          <span>{this.state.details.statistics.likeCount}</span>
        </button>
        <button type="button" className="dislike-button">
          <i className="material-icons">thumb_down</i>
          <span>{this.state.details.statistics.dislikeCount}</span>
        </button>
        <h5 className="details-date">
          Published on {parseDate(this.state.details.snippet.publishedAt)}
        </h5>
        {this.addDescription()}
      </div>
    );
  }
}

export default Details;
