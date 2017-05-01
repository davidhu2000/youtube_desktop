import React from 'react';
import PropTypes from 'prop-types';

class NewComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let user = this.props.user.picture;

    return (
      <div className="new-comment-container">
        <div className="new-comment-left">
          <img src={user} />
        </div>

        <form onSubmit={this.handleSubmit} className="new-comment-form">
          <input type="text"
            placeholder="Add a public comment..."
            onChange={this.handleChange}
            className="" />
          <input type="submit" value="Comment" className="" />
        </form>
      </div>
    );
  }
}

NewComment.propTypes = {
  videoId: PropTypes.string
}

export default NewComment;
