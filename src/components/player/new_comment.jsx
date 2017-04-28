import React             from 'react';
import PropTypes         from 'prop-types';
import YT_API_KEY        from '../../../config/api_key';

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
    return (
      <form onSubmit={this.handleSubmit} className="new-comment-form">
        <input type="text"
               placeholder="Add a public comment..."
               onChange={this.handleChange}
               className="" />
        <input type="submit" value="Comment" className="" />
      </form>
    );
  }
}

NewComment.propTypes = {
  videoId: PropTypes.string
}

export default NewComment;
