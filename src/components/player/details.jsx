import React            from 'react';
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
    
    const { details, subs } = this.state;
    const { title, channelTitle, publishedAt, description } = details.snippet;
    const { viewCount, likeCount, dislikeCount } = details.statistics;

    return (

      <div className="details-container">
        <DetailsUpper 
          subs={subs}
          title={title}
          likeCount={likeCount}
          viewCount={viewCount}
          channelTitle={channelTitle}
          dislikeCount={dislikeCount} />

        <DetailsLower 
          publishedAt={publishedAt}
          description={description} />

      </div>
    );
  }
}

export default Details;
