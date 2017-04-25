import React from 'react';
import PropTypes from 'prop-types';
import LikeDislikeRatio from './like_dislike_ratio';
import { formatNumber } from 'helpers';

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

    let ratio = likeCount / (dislikeCount + likeCount);

    return (
      <div className="details-upper-container">
          <h1 className="title">{title}</h1>
          <div className="details-stats-bar">
            <div className="details-stats-bar-left">
              <span className="total-views">{formatNumber(viewCount)} views</span>
            </div>

            <div className="details-stats-bar-right">

              <div className="details-rating-section">
                <div className="details-action-bar-right">
                  <button
                    type="button"
                    className="like-button"
                    style={{ color: this.ratingButtonColor('like') }}
                    onClick={ () => this.ratingVideo('like') } >

                    <i className="material-icons">thumb_up</i>
                    <span className="details-action-bar-count">
                      {formatNumber(likeCount + (this.props.currentRating === 'like' ? 1 : 0) ).slice(0,1) + "K"}
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
                      {formatNumber(dislikeCount + (this.props.currentRating === 'dislike' ? 1 : 0) ).slice(0,1) + "K"}
                    </span>
                    <span className="details-action-bar-count-text">
                      I dislike this
                      <div className='arrow'></div>
                    </span>
                  </button>
                </div>
                <LikeDislikeRatio ratio={ratio} />
              </div>

              <div className="details-action-bar-left">
                <button type="button" className="add-button">
                  <i className="material-icons">add</i>
                </button>
                <button type="button" className="share-button">
                  <i className="material-icons">share</i>
                </button>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

DetailsUpper.propTypes = {
  channelTitle: PropTypes.string,
  context: PropTypes.object,
  currentRating: PropTypes.string,
  dislikeCount: PropTypes.string,
  likeCount: PropTypes.string,
  subs: PropTypes.string,
  title: PropTypes.string,
  videoId: PropTypes.string,
  videosRate: PropTypes.func,
  viewCount: PropTypes.string
};

export default DetailsUpper;
