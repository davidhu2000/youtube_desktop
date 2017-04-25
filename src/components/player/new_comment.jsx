import React from 'react';

class NewComment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };
  }

  render() {
    return (
      <div className="new-comment-container">
        <input type="text"></input>
      </div>
    );
  }
}

// NewComment.propTypes

export default NewComment;
