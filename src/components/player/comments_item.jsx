import React from 'react';

class CommentsItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comment;
    const { authorDisplayName, authorProfileImageUrl, likeCount,
            textOriginal } = comment.snippet.topLevelComment.snippet;

    return (
      <div className="comment-item">
        <img src={authorProfileImageUrl}/>
        <div className="comment-right">
          <h4 className="display-name">{authorDisplayName}</h4>
          <p className="comment=body">{textOriginal}</p>
          <p className="like-count">{likeCount}</p>
        </div>
      </div>
    );
  }

}

export default CommentsItem;
