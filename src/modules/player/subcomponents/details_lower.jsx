const { ipcRenderer } = window.require('electron');
import React from 'react';
import PropTypes from 'prop-types';
import { parseDate, formatNumber, parseStringForLinks } from 'helpers';

class DetailsLower extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       showAllDecription: false
     };
  }

  componentDidMount() {
    let container = document.getElementsByClassName('details-lower-description-text')[0];
    container.onclick = event => {
      if (event.target.tagName === 'A') {
        let url = event.target.innerHTML;
        ipcRenderer.send('open-url', url);
      }
    };
  }

  componentWillUnMount() {
    let container = document.getElementsByClassName('details-lower-description-text')[0];
    container.onclick = null;
  }

  parseDescription(description) {
    return description.map(line => {
      // TODO: parse description for links
      return (
          <span key={Math.random()} dangerouslySetInnerHTML={{ __html: `${parseStringForLinks(line)}<br />` }}>
          </span>
      );
    });
  }

  addDescription() {
    if (this.props.description){
      let descript;
      if(this.state.showAllDecription) {
        descript = this.props.description.split('\n');
      } else {
        descript = [this.props.description.slice(0,200)];
      }

      return (
        <p className="details-lower-description-text">
          { this.parseDescription(descript) }
        </p>
      );
    }
  }

  render() {
    let { subs, channelTitle, channelImg } = this.props;

    return (
      <div className="details-lower-container">
        <div className="details-lower-container-left">
          <img src={ channelImg } />
        </div>
        <div className="details-lower-container-right">
          <div className="details-lower-container-upper">
            <div className="details-lower-container-upper-left">
              <a href="" className="channel-name">{channelTitle}</a>
              <h3 className="details-date">
                Published on {parseDate(this.props.publishedAt)}
              </h3>
            </div>
            <div className="details-lower-container-upper-right">
              <div className="button-span">
                <button type="button" className="sub-button">
                  <span>SUBSCRIBE</span>
                  <span className="sub-span">{formatNumber(subs, true)}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="details-lower-description">
            {this.addDescription()}
            <button
              className='details-description-button'
              onClick={ () => this.setState({ showAllDecription: !this.state.showAllDecription }) }>
              { this.state.showAllDecription ? 'Show less' : 'Show more' }
            </button>
          </div>
        </div>
      </div>
    );
  }
}

DetailsLower.propTypes = {
  channelTitle: PropTypes.string,
  subs: PropTypes.string,
  publishedAt: PropTypes.string,
  description: PropTypes.string
};

export default DetailsLower;
