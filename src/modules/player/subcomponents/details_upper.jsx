import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from 'helpers';
import autoBind from 'react-autobind';

import LikeDislikeRatio from './like_dislike_ratio';

class DetailsUpper extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  ratingVideo(rating) {
    let ratingString;
    if (this.props.currentRating === rating) {
      ratingString = 'none';
    } else {
      ratingString = rating;
    }
    this.props.videosRate(this.props.videoId, ratingString);
  }

  ratingButtonColor(ratingType) {
    if (this.props.currentRating === ratingType) {
      return '#167AC6';
    } else {
      return '#666666';
    }
  }

  render() {
    let { title, viewCount, likeCount, dislikeCount } = this.props;

    likeCount = parseInt(likeCount, 10);
    dislikeCount = parseInt(dislikeCount, 10);

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
                  onClick={() => this.ratingVideo('like')}
                >

                  <i className="material-icons">thumb_up</i>
                  <span className="details-action-bar-count">
                    {formatNumber(likeCount + (this.props.currentRating === 'like' ? 1 : 0), true)}
                  </span>
                  <span className="details-action-bar-count-text">
                    I like this
                    <div className='arrow' />
                  </span>
                </button>

                <button
                  type="button"
                  className="dislike-button"
                  style={{ color: this.ratingButtonColor('dislike') }}
                  onClick={() => this.ratingVideo('dislike')}
                >

                  <i className="material-icons">thumb_down</i>
                  <span className="details-action-bar-count">
                    {formatNumber(dislikeCount + (this.props.currentRating === 'dislike' ? 1 : 0), true)}
                  </span>
                  <span className="details-action-bar-count-text">
                    I dislike this
                    <div className='arrow' />
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
  currentRating: PropTypes.string.isRequired,
  dislikeCount: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  videosRate: PropTypes.func.isRequired,
  viewCount: PropTypes.string.isRequired
};

export default DetailsUpper;
