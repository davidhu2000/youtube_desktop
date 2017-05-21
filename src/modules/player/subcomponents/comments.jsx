import React from 'react';
import PropTypes from 'prop-types';
import CommentsItem from './comments_item';
import NewComment from './new_comment';

class Comments extends React.Component {
  renderComments() {
    let comments = this.props.comments;

    if (comments.length !== 0) {
      return comments.map(comment => <CommentsItem key={comment.etag} comment={comment} />);
    }
  }

  renderNumComments() {
    let numComments = 0;
    if (this.props.comments) {
      numComments = this.props.comments.length;
      return numComments;
    }
  }

  renderAddComment() {
    let user = this.props.user;
    let videoId = this.props.details.id;
    let channelId = this.props.details.snippet.channelId;

    if (this.props.loggedIn) {
      return (
        <NewComment
          videoId={videoId}
          user={user}
          channelId={channelId}
          fetchComments={this.props.fetchComments}
        />
      );
    }
  }

  render() {
    if (this.props.comments === "disabled") {
      return (
        <div className="comments-container">Comments are disabled.</div>
      );
    }

    return (
      <div className="comments-container">
        <div className="top-comments">
          {this.renderNumComments()}
          <p>Comments</p>
        </div>

        { this.renderAddComment() }

        <div className="comments-list">
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.shape(),
  comments: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()), PropTypes.string
  ]).isRequired,
  details: PropTypes.shape(),
  fetchComments: PropTypes.func.isRequired
};

Comments.defaultProps = {
  user: {},
  details: {}
};

export { Comments };
