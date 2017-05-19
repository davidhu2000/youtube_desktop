/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import { submitCommentThread } from 'core/youtube_api';

class NewComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      active: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let videoId = this.props.videoId;
    let channelId = this.props.channelId;
    let body = this.state.body;
    let that = this;

    submitCommentThread(videoId, channelId, body).then(() => {
      that.props.fetchComments(videoId);

      let input = document.getElementsByClassName("new-comment-input")[0];
      input.value = "";

      that.setState({ body: "", active: false });
    });
  }

  showButtons() {
    if (this.state.active) {
      return (
        <div>
          <button type="button" onClick={() => this.setState({ active: false })}>
            Cancel
          </button>
          <input type="submit" value="Comment" />
        </div>
      );
    }
  }

  render() {
    let user = this.props.user.picture;

    return (
      <div className="new-comment-container">
        <div className="new-comment-left">
          <img src={user} alt={user.name} />
        </div>

        <form onSubmit={this.handleSubmit} className="new-comment-form">
          <input
            type="text"
            placeholder="Add a public comment..."
            onChange={this.handleChange}
            onFocus={() => this.setState({ active: true })}
            className="new-comment-input"
          />
          { this.showButtons() }
        </form>
      </div>
    );
  }
}

NewComment.propTypes = {
  videoId: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  channelId: PropTypes.string.isRequired
};

export default NewComment;
