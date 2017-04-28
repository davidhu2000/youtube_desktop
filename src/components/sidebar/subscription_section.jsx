import React from 'react';
import { Link } from 'react-router';
import { values } from 'lodash';
import SidebarItem from './sidebar_item';

class SubscriptionSection extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSubscriptions() {
    let subs = values(this.props.subscriptions);
    return subs.map(sub => (
      <SidebarItem
        key={Math.random()}
        link={`channels/${subs.channelId}`}
        span={sub.title}
        useImage={true}
        url={sub.thumbnails.default.url} />
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

export default SubscriptionSection;
