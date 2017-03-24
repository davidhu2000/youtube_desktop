import React from 'react';

class CommentsItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comment
    const { authorDisplayName, authorProfileImageUrl, likeCount,
            textOriginal } = comment.snippet.topLevelComment.snippet;

    return (
      <div className="comment-item">
        <img src={authorProfileImageUrl}/>
        <h4 className="display-name">{authorDisplayName}</h4>
        <p className="like-count">{likeCount}</p>
        <p className="comment=body">{textOriginal}</p>
      </div>
    );
  }

}

export default CommentsItem;
