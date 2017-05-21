import React from 'react';
import PropTypes from 'prop-types';
import { timeFromNow } from 'helpers';

const CommentsItem = ({ comment }) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    // likeCount,
    textOriginal,
    publishedAt } = comment.snippet.topLevelComment.snippet;

  return (
    <div className="comment-item">
      <img src={authorProfileImageUrl} alt={authorDisplayName} />
      <div className="comment-right">
        <div className="comment-right-upper">
          <h4 className="display-name">{authorDisplayName}</h4>
          <p className="comment-date">{timeFromNow(publishedAt)}</p>
        </div>

        <div className="comment-right-lower">
          <p className="comment-body">{textOriginal.slice(0, 75)}</p>
        </div>

      </div>
    </div>
  );
};

CommentsItem.propTypes = {
  comment: PropTypes.shape().isRequired
};

export default CommentsItem;
