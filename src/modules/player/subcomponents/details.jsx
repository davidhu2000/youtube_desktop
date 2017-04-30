import React from 'react';
import PropTypes from 'prop-types';
import { fetchDetails, fetchVideoRating } from '../actions';
import { videosRate } from 'common/interaction/actions';
import DetailsUpper from './details_upper';
import DetailsLower from './details_lower';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.details.snippet) {
      return null;
    }

    const { details, rating } = this.props;
    const { subs } = details;

    const { title, channelTitle, publishedAt, description } = details.snippet;
    const { viewCount, likeCount, dislikeCount } = details.statistics;

    return (
      <div className="details-container">
        <DetailsUpper
          subs={subs}
          title={title}
          likeCount={likeCount}
          viewCount={viewCount}
          videosRate={this.props.videosRate}
          context={this}
          currentRating={rating}
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
