import React from 'react';
import PropTypes from 'prop-types';

class SidebarItem extends React.Component {
   constructor(props) {
     super(props);
  }

  renderIcon() {
    if(this.props.useImage) {
      return <img src={this.props.url} />;
    } else {
      return <i className='material-icons'>{this.props.icon}</i>;
    }
  }

  render() {
    const { link, icon, span } = this.props;
    return (
      <div className="sidebar-item">
        <Link to={`/${link}`}>
          { this.renderIcon() }
          <span>${span}</span>
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
  link: PropTypes.string,
  span: PropTypes.string
};

export default SidebarItem;