import React             from 'react';
import PropTypes         from 'prop-types';
import YT_API_KEY        from '../../../config/api_key';

class NewComment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };
  }

  render() {
    return (
      <form className="new-comment-form">
        <input type="text" className="" />
        <input type="submit" className="" />
      </form>
    );
  }
}

NewComment.propTypes = {
  videoId: PropTypes.string
}

export default NewComment;
