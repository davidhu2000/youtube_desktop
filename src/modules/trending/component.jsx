/* global Promise */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { propChecker } from 'helpers';
import { VideoList } from 'common/components';

class TrendingIndex extends React.Component {
  componentDidMount() {
    let dataNeeded = [];

    let { trending } = this.props;
    let ms = 24 * 3600 * 1000;
    if (Date.now() - trending.date > ms || !trending.videos) {
      dataNeeded.push(this.props.fetchTrending());
    }

    Promise.all(dataNeeded).then(() => this.props.receiveSetting({ isLoading: false }));
  }

  render() {
    return (
      <div className="main-content">
        <VideoList
          shouldShowSpinner={false}
          shouldShowVolume={false}
          shouldShowPageNumber={false}
          videos={this.props.trending.videos}
          windowWidth={this.props.setting.windowWidth}
        />
      </div>
    );
  }
}

TrendingIndex.propTypes = {
  fetchTrending: PropTypes.func.isRequired,
  receiveSetting: PropTypes.func.isRequired,
  trending: PropTypes.shape({
    date: PropTypes.number,
    videos: PropTypes.arrayOf(PropTypes.object)
  }),
  setting: propChecker.setting().isRequired
};

TrendingIndex.defaultProps = {
  trending: {
    date: '',
    videos: []
  }
};

export default withRouter(TrendingIndex);
