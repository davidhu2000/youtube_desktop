import React from 'react';
import PropTypes from 'prop-types';
import { parseDate } from 'helpers';

class CommentsItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comment;
    const { authorDisplayName, authorProfileImageUrl, likeCount,
            textOriginal, publishedAt, updatedAt } = comment.snippet.topLevelComment.snippet;
    let parsedDate = parseDate(publishedAt);
    return (
      <div className="comment-item">
        <img src={authorProfileImageUrl}/>
        <div className="comment-right">
          <div className="comment-right-upper">
            <h4 className="display-name">{authorDisplayName}</h4>
            <p className="comment-date">{parsedDate}</p>
          </div>

          <div className="comment-right-lower">
            <p className="comment-body">{textOriginal.slice(0,75)}</p>
          </div>

        </div>
      </div>
    );
  }
}

CommentsItem.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentsItem;
