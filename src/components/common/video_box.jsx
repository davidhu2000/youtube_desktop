import React from 'react';
import PropTypes from 'prop-types';
import { VideoBoxItem } from './video_box_item';

class VideoBox extends React.Component {
   constructor(props) {
     super(props);

     let data = this.calcBoxWidthAndNumVideos(props.sidebarVisible);

     this.state = {
       startIndex: 0,
       endIndex: data.numVideosPerRow,
       numVideosPerRow: data.numVideosPerRow,
       numRows: 2,
       boxWidth: data.boxWidth
     };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.windowWidth !== newProps.windowWidth) {
      let newState = this.calcBoxWidthAndNumVideos();
      this.setState(newState);
      this.updateEndIndex();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.sidebarVisible !== prevProps.sidebarVisible) {
      let newState = this.calcBoxWidthAndNumVideos();
      this.setState(newState);
      this.updateEndIndex();
    }
  }

  calcBoxWidthAndNumVideos() {
    let numVideosPerRow = 2;
    let boxWidth = 438;
    let width = window.innerWidth;

    if (width > 1300 && this.props.sidebarVisible) {
      width -= 240;
    } 

    if(width > 1312) {
      numVideosPerRow = 6;
      boxWidth = 1262;
    } else if(width > 1132) {
      numVideosPerRow = 5;
      boxWidth = 1056;
    } else if(width > 900) {
      numVideosPerRow = 4;
      boxWidth = 850;
    } else if(width > 694) {
      numVideosPerRow = 3;
      boxWidth = 644;
    }
    return { numVideosPerRow, boxWidth };
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
    let numVideos = this.calcBoxWidthAndNumVideos(this.props.sidebarVisible).numVideosPerRow;
    this.setState({
      endIndex: this.state.startIndex + numVideos
    });
  }

  // for sliding video box
  slideVideos(direction) {
    let numVideos = this.calcBoxWidthAndNumVideos(this.props.sidebarVisible).numVideosPerRow;

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
    // console.log(this.props)
    if (this.props.multiline) {
      let buttonVal = this.state.numRows === 2 ? 'Show more' : 'Show fewer';
      return (
        <div className='video-box multiline' style={{width: this.state.boxWidth}}>
          <h1 className='video-box-title'>{this.props.title}</h1>
          <div className='video-box-videos multiline'>
            { this.renderVideos() }
            <button 
            className='video-box-toggle' 
            onClick={this.toggleMoreVideos.bind(this)}>{ buttonVal }</button>
          </div>
          
        </div>
      );
    } else {
      return (
        <div className='video-box' style={{width: this.state.boxWidth}}>
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
  vids: PropTypes.arrayOf(PropTypes.object),
  sidebarVisible: PropTypes.bool
};

VideoBox.defaultProps = {
  multiline: false
};

export { VideoBox };