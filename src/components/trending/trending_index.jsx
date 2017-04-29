/* global Promise */
import React          from 'react';
import PropTypes      from 'prop-types';
import { withRouter } from 'react-router';
import { VideoList }  from '../common';

class TrendingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let dataNeeded = [];

    let { trending } = this.props;
    let ms = 24 * 3600 * 1000;
    if(Date.now() - trending.date > ms || !trending.videos) {
      dataNeeded.push(this.props.fetchTrending());
    }

    Promise.all(dataNeeded).then( res => this.props.receiveSetting({ isLoading: false }));
  }

  render() {
    return (
      <div className="main-content">
        <VideoList
          shouldShowVolume={false}
          shouldShowPageNumber={false}
          videos={this.props.trending.videos} 
          windowWidth={this.props.setting.windowWidth} />
      </div>
      
    );
  }
}

TrendingIndex.propTypes = {
  fetchTrending: PropTypes.func.isRequired,
  receiveSetting: PropTypes.func,
  trending: PropTypes.shape({
    date: PropTypes.number,
    videos: PropTypes.arrayOf(PropTypes.object)
  })
};

export default withRouter(TrendingIndex);
