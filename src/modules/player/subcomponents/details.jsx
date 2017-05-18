import React from 'react';
import PropTypes from 'prop-types';

import DetailsUpper from './details_upper';
import DetailsLower from './details_lower';

const Details = props => {
  if (!props.details.snippet) {
    return null;
  }

  const { details, rating } = props;
  const { subs } = details;
  const channelImg = details.channelSnippet.thumbnails.default.url;


  const { title, channelTitle, publishedAt, description } = details.snippet;
  const { viewCount, likeCount, dislikeCount } = details.statistics;

  return (
    <div className="details-container" style={{ width: props.width }}>
      <DetailsUpper
        subs={subs}
        title={title}
        likeCount={likeCount}
        viewCount={viewCount}
        videosRate={props.videosRate}
        context={this}
        currentRating={rating}
        videoId={props.videoId}
        channelTitle={channelTitle}
        dislikeCount={dislikeCount}
      />

      <DetailsLower
        channelTitle={channelTitle}
        subs={subs}
        publishedAt={publishedAt}
        description={description}
        channelImg={channelImg}
      />
    </div>
  );
};

Details.propTypes = {
  rating: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  videosRate: PropTypes.func.isRequired,
  details: PropTypes.shape().isRequired,
  videoId: PropTypes.string.isRequired
};

export { Details };
