import React from 'react';
import PropTypes from 'prop-types';

class LikeDislikeRatio extends React.Component {
  getPercent() {
    return `${this.props.ratio * 100}%`;
  }

  render() {
    return (
      <div className='like-dislike-ratio-background'>
        <div className='like-dislike-ratio' style={{ width: this.getPercent() }} />
      </div>
    );
  }
}

LikeDislikeRatio.propTypes = {
  ratio: PropTypes.number.isRequired
};

export default LikeDislikeRatio;
