/* global window, document */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import { parseDate, parseStringForLinks } from 'helpers';
import { SubscribeButton } from 'common/components';

const { ipcRenderer } = window.require('electron');

class DetailsLower extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAllDescription: false
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
    return description.map(line => (
      <span key={Math.random()} dangerouslySetInnerHTML={{ __html: `${parseStringForLinks(line)}<br />` }} />
    ));
  }

  addDescription() {
    if (this.props.description) {
      let descript;
      if (this.state.showAllDescription) {
        descript = this.props.description.split('\n');
      } else {
        descript = [this.props.description.slice(0, 200)];
      }

      return (
        <p className="details-lower-description-text">
          { this.parseDescription(descript) }
        </p>
      );
    }
  }

  render() {
    let {
      subs,
      channelId,
      channelImg,
      channelTitle,
      subscriptions,
      insertSubscription,
      deleteSubscription } = this.props;

    subs = parseInt(subs, 10);

    return (
      <div className="details-lower-container">
        <div className="details-lower-container-left" onClick={() => hashHistory.push(`channels/${channelId}`)}>
          <img src={channelImg} alt={channelTitle} />
        </div>
        <div className="details-lower-container-right">
          <div className="details-lower-container-upper">
            <div className="details-lower-container-upper-left">
              <Link to={`channels/${channelId}`} className="channel-name">{channelTitle}</Link>
              <h3 className="details-date">
                Published on {parseDate(this.props.publishedAt)}
              </h3>
            </div>
            <div className="details-lower-container-upper-right">
              <SubscribeButton
                subscriberNum={subs}
                channelId={channelId}
                insertSubscription={insertSubscription}
                deleteSubscription={deleteSubscription}
                subscriptions={subscriptions}
              />
            </div>
          </div>

          <div className="details-lower-description">
            {this.addDescription()}
            <button
              className='details-description-button'
              onClick={() => this.setState({ showAllDescription: !this.state.showAllDescription })}
            >
              { this.state.showAllDescription ? 'Show less' : 'Show more' }
            </button>
          </div>
        </div>
      </div>
    );
  }
}

DetailsLower.propTypes = {
  channelTitle: PropTypes.string.isRequired,
  subs: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  channelImg: PropTypes.string.isRequired,
  insertSubscription: PropTypes.func.isRequired,
  deleteSubscription: PropTypes.func.isRequired,
  channelId: PropTypes.string.isRequired,
  subscriptions: PropTypes.shape().isRequired
};

export default DetailsLower;
