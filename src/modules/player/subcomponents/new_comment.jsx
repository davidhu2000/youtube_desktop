import React from 'react';
import PropTypes from 'prop-types';
import { submitCommentThread } from 'core/youtube_api';

class NewComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
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

    submitCommentThread(videoId, channelId, body).then(
      response => response.json()
    ).then(responseJson => {
      that.props.fetchComments(videoId);

      let input = document.getElementsByClassName("new-comment-input")[0];
      input.value = "";

      that.setState({ body: "" });
    });
  }

  render() {
    let user = this.props.user.picture;

    return (
      <div className="new-comment-container">
        <div className="new-comment-left">
          <img src={user} />
        </div>

        <form onSubmit={this.handleSubmit} className="new-comment-form">
          <input
            type="text"
            placeholder="Add a public comment..."
            onChange={this.handleChange}
            className="new-comment-input"
          />
        </form>
      </div>
    );
  }
}

NewComment.propTypes = {
  videoId: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  channelId: PropTypes.string.isRequired,
  fetchComments: PropTypes.func.isRequired
};

export default NewComment;
