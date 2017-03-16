import React from 'react';
import { hashHistory } from 'react-router';
import { authenticateUser } from '../../util/oauth_util';

// const remote = require('electron').remote;

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let authpage = document.getElementById('authPage');

    console.log(authpage);

    console.log(authenticateUser());

    authpage.addEventListener('change', event => {
      console.log(event)
    })

    // console.log(remote);
  }

    // componentDidUpdate() {
    //   console.log('updated')
    // }

  render() {
    return (
      <webview
        id="authPage"
        onClick={console.log('changed')}
        className='authpage hidden'
        src={authenticateUser()}
      ></webview>
    );
  }
}

export { AuthPage };
