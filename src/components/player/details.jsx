import React            from 'react';
import YT_API_KEY       from '../../../config/api_key';
import { parseDate }    from '../../helpers';
import { fetchDetails } from '../../actions/youtube_video_actions';

class Details extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      details: {},
      subs: 0
    };
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
      return null;
    }

    const { title, channelTitle, publishedAt } = this.state.details.snippet;
    const { viewCount, likeCount, dislikeCount } = this.state.details.statistics;

    return (
      <div className="details-container">
        <span className="title">{title}</span>
        <a href="" className="channel-name">{channelTitle}</a>
        <button type="button" className="sub-button">
          <i className="material-icons">play_arrow</i>
          <span>Subscribe</span>
        </button>
        <span>{Number(this.state.subs).toLocaleString()}</span>
        <span className="total-views">{Number(viewCount).toLocaleString()}</span>
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
          <span>{Number(likeCount).toLocaleString()}</span>
        </button>
        <button type="button" className="dislike-button">
          <i className="material-icons">thumb_down</i>
          <span>{Number(dislikeCount).toLocaleString()}</span>
        </button>
        <h5 className="details-date">
          Published on {parseDate(publishedAt)}
        </h5>
        {this.addDescription()}
      </div>
    );
  }
}

export default Details;
