import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sidebar" className='sidebar'>
        {/* Header section */}
        <div className='sidebar-section' id='sidebar-header'>
          <div className='sidebar-item'>

            <i className="material-icons">menu</i>
            <img className='youtube-logo' src="./app/assets/Youtube-logo.png" />
          </div>
        </div>

        {/* Main button section */}
        <div className="sidebar-section">
          <div className="sidebar-item">
            <Link to='/home'>
              <i className='material-icons'>home</i>
              <span>Home</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to='/trending'>
              <i className='material-icons'>whatshot</i>
              <span>Trending</span>
            </Link>
          </div>

          <div className="sidebar-item">
            {this.props.loggedIn ? (
              <Link to='/subscriptions'>
                <i className='material-icons'>subscriptions</i>
                <span>Subscriptions</span>
              </Link>
            ) : (
              <Link to=''>
                <i className='material-icons'>hourglass_full</i>
                <span>History</span>
              </Link>
            )}

          </div>
        </div>


        <Link to=''>
          <i className='material-icons redish'>music_video</i>
          <span>Music</span>
        </Link>
        <Link to=''>
          <i className='material-icons redish'>movie</i>
          <span>Movies</span>
        </Link>
        <Link to=''>
          <i className='material-icons redish'>video_label</i>
          <span>TV Shows</span>
        </Link>
        <Link to=''>
          <i className='material-icons redish'>rowing</i>
          <span>Sports</span>
        </Link>
        <Link to=''>
          <i className='material-icons redish'>videogame_asset</i>
          <span>Gaming</span>
        </Link>
        {this.props.loggedIn ? <Link to=''>
          <i className='material-icons redish'>account_circle</i>
          <span>My Channel</span>
        </Link> : ''}
        {this.props.loggedIn ? <Link to='/subscriptions'>
          <i className='material-icons redish'>subscriptions</i>
          <span>Subscriptions</span>
        </Link> : ''}
        {this.props.loggedIn ? <Link to=''>
          <i className='material-icons redish'>watch_later</i>
          <span>Watch Later</span>
        </Link> : ''}
        <Link to=''>
          <i className='material-icons redish'>view_array</i>
          <span>Get YouTube Red</span>
        </Link>

        <hr />
      </div>
    );
  }
}

Sidebar.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = ({ user }) => ({
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
