import React from 'react';
import PropTypes from 'prop-types';

const ChannelNavbar = ({ updateRoute, currentRoute }) => {
  let menus = ["home", "videos", "about"];

  return (
    <div className="channel-navbar-container">
      <ul className="channel-navbar-lists">
        { menus.map(menu => (
          <li
            key={menu}
            role="presentation"
            id={`channel-${menu}`}
            onClick={() => updateRoute(menu)}
            className={currentRoute === menu ? 'current-channel' : ''}
          >
            { menu[0].toUpperCase() + menu.slice(1).toLowerCase() }
          </li>
        ))}

        {/* <li><i className="material-icons">search</i></li> */}
      </ul>
    </div>
  );
};

ChannelNavbar.propTypes = {
  currentRoute: PropTypes.string.isRequired,
  updateRoute: PropTypes.func.isRequired
};

export { ChannelNavbar };
