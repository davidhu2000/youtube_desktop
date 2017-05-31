import React from 'react';
import PropTypes from 'prop-types';

import DetailsUpper from './details_upper';
import DetailsLower from './details_lower';

const Details = props => {
  if (!props.details.snippet) {
    return null;
  }

  const { details, rating, width, subscriptions } = props;
  const { subs } = details;
  const channelImg = details.channelSnippet.thumbnails.default.url;
  const channelId = details.snippet.channelId;

  const { title, channelTitle, publishedAt, description } = details.snippet;
  const { viewCount, likeCount, dislikeCount } = details.statistics;

  return (
    <div className="details-container" style={{ width }}>
      <DetailsUpper
        subs={subs}
        title={title}
        likeCount={likeCount}
        viewCount={viewCount}
        videosRate={props.videosRate}
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
        channelId={channelId}
        insertSubscription={props.insertSubscription}
        deleteSubscription={props.deleteSubscription}
        subscriptions={subscriptions}
      />
    </div>
  );
};

Details.propTypes = {
  rating: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  videosRate: PropTypes.func.isRequired,
  details: PropTypes.shape().isRequired,
  videoId: PropTypes.string.isRequired,
  insertSubscription: PropTypes.func.isRequired,
  deleteSubscription: PropTypes.func.isRequired,
  subscriptions: PropTypes.shape().isRequired
};

export { Details };
