import React from 'react';
import { formatNumber } from '../../helpers';

class DetailsUpper extends React.Component {
   constructor(props) {
     super(props);
  }

  render() {
    const { 
      title, channelTitle, subs, 
      viewCount, likeCount, dislikeCount } = this.props; 

    return (
      <div className="details-upper-container">
          <h1 className="title">{title}</h1>
          <div className="details-stats-bar">
            <div className="details-stats-bar-left">
              <a href="" className="channel-name">{channelTitle}</a>
              <div className="button-span">
              <button type="button" className="sub-button">
                <img className='white-burger' src="./app/assets/whiteburger.png"/>
                <span>Subscribe</span>
              </button>
              <span className="sub-span">{formatNumber(subs)}</span>
              </div>
            </div>
            <div className="details-stats-bar-right">
              <span className="total-views">{formatNumber(viewCount)} views</span>
            </div>
          </div>
          <div className="details-action-bar">
            <div className="details-action-bar-left">
              <button type="button" className="add-button">
                <i className="material-icons">add</i>
                <span>Add to</span>
              </button>
              <button type="button" className="share-button">
                <i className="material-icons">share</i>
                <span>Share</span>
              </button>
            </div>
            <div className="details-action-bar-right">
              <button type="button" className="like-button">
                <i className="material-icons">thumb_up</i>
                <span>{formatNumber(likeCount)}</span>
              </button>
              <button type="button" className="dislike-button">
                <i className="material-icons">thumb_down</i>
                <span>{formatNumber(dislikeCount)}</span>
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default DetailsUpper;