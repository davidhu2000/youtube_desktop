import React from 'react';
import PropTypes from 'prop-types';
import { fetchDetails, fetchVideoRating } from '../../actions/youtube_video_actions';
import { videosRate } from '../../actions/interaction_actions';
import DetailsUpper from './details_upper';
import DetailsLower from './details_lower';

class Details extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      details: {},
      subs: 0,
      rating: 'none'
    };

  }

  componentDidMount() {
    fetchDetails(this.props.videoId, this);
    fetchVideoRating(this.props.videoId, this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.videoId !== this.props.videoId) {
      fetchDetails(this.props.videoId, this);
      fetchVideoRating(this.props.videoId, this);
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
          videosRate={videosRate}
          context={this}
          currentRating={this.state.rating}
          videoId={this.props.videoId}
          channelTitle={channelTitle}
          dislikeCount={dislikeCount} />

        <DetailsLower
          channelTitle={channelTitle}
          subs={subs}
          publishedAt={publishedAt}
          description={description} />

      </div>
    );
  }
}

Details.propTypes = {
  videoId: PropTypes.string
};

export default Details;
