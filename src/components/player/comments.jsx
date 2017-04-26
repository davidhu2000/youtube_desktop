import React             from 'react';
import PropTypes         from 'prop-types';
import CommentsItem      from './comments_item';
import { fetchComments } from 'actions/youtube_video_actions';
import YT_API_KEY        from '../../../config/api_key';

class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.state = { comments: [] };
  }

  componentDidMount() {
    fetchComments(this.props.videoId, this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.videoId !== this.props.videoId) {
      fetchComments(this.props.videoId, this);
    }
  }

  renderComments() {
    if (this.state.comments.length !== 0) {
      let comments = this.state.comments;
      return comments.map(comment => <CommentsItem key={comment.etag} comment={comment} />)
    }
  }

  renderNumComments() {
    let numComments = 0;
    if (this.state.comments) {
      numComments = this.state.comments.length;
      return numComments;
    }
  }

  render() {
    if (this.state.comments === "disabled") {
      return (<div className="comments-container">Comments are disabled.</div>);
    }

    return (
      <div className="comments-container">
        <div className="top-comments">
          {this.renderNumComments()}
          <p>Comments</p>
        </div>
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

export default Comments;
