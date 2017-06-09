import React from 'react';
import { Link, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { shortenString } from 'helpers';

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  redirectChannel(link) {
    this.props.router.replace(`/${link}`);
  }

  shouldBeRed() {
    let path = this.props.router.location.pathname;
    return path === `/${this.props.link}` ? 'redish' : '';
  }

  renderIcon() {
    if (this.props.useImage) {
      return (
        <img src={this.props.url} alt={this.props.span} />
      );
    } else {
      return (
        <i className={`material-icons ${this.shouldBeRed()}`}>
          {this.props.icon}
        </i>
      );
    }
  }

  render() {
    const { link, span } = this.props;
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
  useImage: false,
  url: '',
  icon: ''
};

SidebarItem.propTypes = {
  useImage: PropTypes.bool.isRequired,
  url: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired
};

export default withRouter(SidebarItem);
