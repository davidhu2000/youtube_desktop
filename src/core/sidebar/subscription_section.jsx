import React from 'react';
import { Link } from 'react-router';
import { values } from 'lodash';
import { propChecker } from 'helpers';
import SidebarItem from './sidebar_item';

class SubscriptionSection extends React.Component {
  renderSubscriptions() {
    let subs = values(this.props.subscriptions);
    return subs.map(sub => (
      <SidebarItem
        key={Math.random()}
        link={`channels/${sub.resourceId.channelId}`}
        span={sub.title}
        useImage
        url={sub.thumbnails.default.url}
      />
    ));
  }

  render() {
    return (
      <div className="sidebar-section">
        <div className="sidebar-header">
          <Link to=''>SUBSCRIPTIONS</Link>
        </div>
        {this.renderSubscriptions()}
      </div>
    );
  }
}

SubscriptionSection.defaultProps = {
  subscriptions: {}
};

SubscriptionSection.propTypes = {
  subscriptions: propChecker.subscriptions()
};

export default SubscriptionSection;
