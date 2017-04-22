import React from 'react';
import PropTypes from 'prop-types';
import { VideoBoxItem } from './video_box_item';

class VideoBox extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       startIndex: 0,
       endIndex: this.numberVideosToShow(),
       numVideosPerRow: this.numberVideosToShow(),
       numRows: 2
     };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.windowWidth !== newProps.windowWidth) {
      this.setState({ numVideosPerRow: this.numberVideosToShow() });
      this.updateEndIndex();
    }
  }

  numberVideosToShow() {
    let numVideos = 2;
    if(window.innerWidth > 1312) {
      numVideos = 6;
    } else if(window.innerWidth > 1132) {
      numVideos = 5;
    } else if(window.innerWidth > 900) {
      numVideos = 4;
    } else if(window.innerWidth > 694) {
      numVideos = 3;
    }
    return numVideos;
  }
  
  // for multi-line video box
  toggleMoreVideos() {  
    let numRows;
    if (this.state.numRows === 2) {
      numRows = Math.floor(this.props.vids.length / this.state.numVideosPerRow);
    } else {
      numRows = 2;
    }
    this.setState({ numRows });
  }

  // for sliding video box
  updateEndIndex() {
    let numVideos = this.numberVideosToShow();
    this.setState({
      endIndex: this.state.startIndex + numVideos
    });
  }

  // for sliding video box
  slideVideos(direction) {
    let numVideos = this.numberVideosToShow();

    let startIndex = this.state.startIndex + direction * numVideos;
    let endIndex   = this.state.endIndex + direction * numVideos;

    if (startIndex < 0) {
      startIndex = 0;
      endIndex = numVideos;
    }

    if (endIndex > 15) {
      endIndex = 15;
      startIndex = endIndex - numVideos;
    }

    this.setState({ startIndex, endIndex });
  }

  renderVideos() {
    let { numVideosPerRow, numRows, startIndex, endIndex } = this.state; 
    let startVal, endVal;

    if (this.props.multiline) {
      startVal = 0;
      endVal = numVideosPerRow * numRows;
    } else {
      startVal = startIndex;
      endVal = endIndex;
    }

    return this.props.vids.slice(startVal, endVal).map( vid => (
      <VideoBoxItem key={vid.etag} vid={vid} />
    ));
  }

  render() {
    console.log(this.props);
    console.log(this.state)
    if (this.props.multiline) {
      let buttonVal = this.state.numRows === 2 ? 'Show more' : 'Show fewer';
      return (
        <div className='video-box multiline'>
          <h1 className='video-box-title'>{this.props.title}</h1>
          <div className='video-box-videos multiline'>
            { this.renderVideos() }
          </div>
          <button 
            className='video-box-toggle' 
            onClick={this.toggleMoreVideos.bind(this)}>{ buttonVal }</button>
        </div>
      );
    } else {
      return (
        <div className='video-box'>
          <h1 className='video-box-title'>{this.props.title}</h1>
          <div className='video-box-videos'>
            { this.renderVideos() }
            { this.state.startIndex === 0 ? '' : <a className="prev" onClick={() => this.slideVideos(-1)}>&#10094;</a> }
            { this.state.endIndex  === 15 ? '' : <a className="next" onClick={() => this.slideVideos(1) }>&#10095;</a> }
          </div>
        </div>
      );
    }
  }
}

VideoBox.propTypes = {
  multiline: PropTypes.bool,
  title: PropTypes.string,
  windowWidth: PropTypes.number,
  vids: PropTypes.arrayOf(PropTypes.object)
};

VideoBox.defaultProps = {
  multiline: false
};

export { VideoBox };