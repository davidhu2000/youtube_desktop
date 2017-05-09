import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from 'helpers';

const SubscribeButton = ({ clickSubscribe, subscriberNum, isSubscribed }) => {
  let cssClass = '';
  let text = 'Subscribe';

  if (isSubscribed) {
    cssClass = '-sub';
    text = 'Subscribed';
    subscriberNum++;
  }

  return (
    <div className="subscriber-button">
      <button
        id={`channel-subscribers-button${cssClass}`}
        onClick={clickSubscribe}
      >
        {text} {formatNumber(subscriberNum, true)}
      </button>
    </div>
  );
};

SubscribeButton.propTypes = {
  clickSubscribe: PropTypes.func.isRequired,
  subscriberNum: PropTypes.number.isRequired,
  isSubscribed: PropTypes.bool.isRequired
};

export { SubscribeButton };