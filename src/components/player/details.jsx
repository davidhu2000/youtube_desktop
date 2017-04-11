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
    if (this.state.details.description){
      let descript = this.state.details.description.slice(0,200);
      return <p className="description">{descript + "..."}</p>;
    }
  }

  render() {
    debugger
    return (
      <div className="details-container">
        <h5 className="details-date">
          Published on {parseDate(this.state.details.publishedAt)}
        </h5>
        {this.addDescription()}
      </div>
    );
  }
}

export default Details;
