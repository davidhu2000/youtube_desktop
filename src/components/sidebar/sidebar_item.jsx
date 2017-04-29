import React from 'react';
import { Link, withRouter, replace } from 'react-router';
import PropTypes from 'prop-types';
import { shortenString } from 'helpers';

class SidebarItem extends React.Component {
   constructor(props) {
     super(props);

     this.redirectChannel = this.redirectChannel.bind(this);
  }

  renderIcon() {
    if(this.props.useImage) {
      return (
        <img src={this.props.url} />
      );
    } else {
      return (
        <i className={`material-icons ${this.shouldBeRed()}`}>
          {this.props.icon}
        </i>
      );
    }
  }

  redirectChannel(link) {
    this.props.router.replace(`/${link}`);
  }

  shouldBeRed() {
    let path = this.props.router.location.pathname;
    return path === `/${this.props.link}` ? 'redish' : '';
  }

  render() {
    const { link, icon, span } = this.props;
    return (
      <div className={`sidebar-item`} id={link}>
        <Link onClick={() => this.redirectChannel(link)}>
          { this.renderIcon() }
          <span>{shortenString(span, 19)}</span>
        </Link>
      </div>
    );
  }
}

SidebarItem.defaultProps = {
  useImage: false
};

SidebarItem.propsTypes = {
  useImage: PropTypes.bool,
  url: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired
};

export default withRouter(SidebarItem);
