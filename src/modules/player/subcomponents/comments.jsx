import React from 'react';
import PropTypes from 'prop-types';
import CommentsItem from './comments_item';
import NewComment from './new_comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

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

  render() {
    let user = this.props.user;

    if (this.props.comments === "disabled") {
      return (<div className="comments-container">Comments are disabled.</div>);
    }

    return (
      <div className="comments-container">
        <div className="top-comments">
          {this.renderNumComments()}
          <p>Comments</p>
        </div>
        <NewComment videoId={this.props.videoId} user={user}/>
        <div className="comments-list">
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  videoId: PropTypes.string
};

export { Comments };
