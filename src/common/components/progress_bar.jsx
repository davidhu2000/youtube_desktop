import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0.1
    };

    this.animate = null;
  }

  componentDidMount() {
    this.animate = setInterval(() => {
      this.props.updateProgress();
    }, 33);
  }

  componentWillUnmount() {
    clearInterval(this.animate);
  }

  render() {
    return (
      <div id='progress-bar' style={{ width: `${this.props.progress}%` }} />
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  updateProgress: PropTypes.func.isRequired
};

export { ProgressBar };
