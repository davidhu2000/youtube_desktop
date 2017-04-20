import React            from 'react';
import YT_API_KEY       from '../../../config/api_key';
import { parseDate }    from '../../helpers';
import { fetchDetails } from '../../actions/youtube_video_actions';
import DetailsUpper     from './details_upper';
import DetailsLower     from './details_lower';

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

  render() {

    if (!this.state.details.snippet) {
      return null;
    }
    
    const { title, channelTitle, publishedAt, description } = this.state.details.snippet;
    const { viewCount, likeCount, dislikeCount } = this.state.details.statistics;

    return (

      <div className="details-container">
        <DetailsUpper 
          title={title}
          channelTitle={channelTitle}
          subs={this.state.subs}
          viewCount={viewCount}
          likeCount={likeCount}
          dislikeCount={dislikeCount} />

        <DetailsLower 
          publishedAt={publishedAt}
          description={description} />

      </div>
    );
  }
}

export default Details;
