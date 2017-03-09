import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sidebar'>
        <Link to=''>
          <i className='material-icons'>home</i>
          <span>Home</span>
        </Link>
        <Link to=''>
          <i className='material-icons'>account_circle</i>
          <span>My Channel</span>
        </Link>
        <Link to=''>
          <i className='material-icons'>whatshot</i>
          <span>Trending</span>
        </Link>
        <Link to=''>
          <i className='material-icons'>subscriptions</i>
          <span>Subscriptions</span>
        </Link>
        <Link to=''>
          <i className='material-icons'>hourglass_full</i>
          <span>History</span>
        </Link>
        <Link to=''>
          <i className='material-icons'>watch_later</i>
          <span>Watch Later</span>
        </Link>
        <Link to=''>
          <i className='material-icons'>view_array</i>
          <span>Get YouTube Red</span>
        </Link>

        <hr />
      </div>
    );
  }
}

export default Sidebar;
