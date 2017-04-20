import React from 'react';
import LikeDislikeRatio from './like_dislike_ratio';
import { formatNumber } from '../../helpers';

class DetailsUpper extends React.Component {
   constructor(props) {
     super(props);
     this.ratingVideo = this.ratingVideo.bind(this);
    //  this.ratingButtonColor = this.ratingButtonColor.bind(this);
  }

  ratingVideo(rating) {
    let ratingString;
    if (this.props.currentRating === rating) {
      ratingString = 'none';
    } else {
      ratingString = rating;
    }
    this.props.videosRate(this.props.videoId, ratingString, this.props.context);
  }

  ratingButtonColor(ratingType) {
    if (this.props.currentRating === ratingType) {
      return '#167AC6';
    } else {
      return '#666666';
    }
  }

  render() {
    let { 
      title, channelTitle, subs, 
      viewCount, likeCount, dislikeCount } = this.props; 
    
    likeCount = parseInt(likeCount);
    dislikeCount = parseInt(dislikeCount);

    console.log(likeCount);
    console.log(likeCount + (this.props.currentRating === 'like' ? 1 : 0) )

    let ratio = likeCount / (dislikeCount + likeCount);
    
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
              <LikeDislikeRatio ratio={ratio} />
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
              <button 
                type="button" 
                className="like-button" 
                style={{ color: this.ratingButtonColor('like') }}
                onClick={ () => this.ratingVideo('like') } >

                <i className="material-icons">thumb_up</i>
                <span className="details-action-bar-count">
                  {formatNumber(likeCount + (this.props.currentRating === 'like' ? 1 : 0) )}
                </span>
                <span className="details-action-bar-count-text">
                  I like this
                  <div className='arrow'></div>
                </span>
              </button>

              <button 
                type="button" 
                className="dislike-button"
                style={{ color: this.ratingButtonColor('dislike') }}
                onClick={ () => this.ratingVideo('dislike') } >

                <i className="material-icons">thumb_down</i>
                <span className="details-action-bar-count">
                  {formatNumber(dislikeCount + (this.props.currentRating === 'dislike' ? 1 : 0) )}
                </span>
                <span className="details-action-bar-count-text">
                  I dislike this
                  <div className='arrow'></div>
                </span>
              </button>
              
            </div>
          </div>
        </div>
    );
  }
}

export default DetailsUpper;