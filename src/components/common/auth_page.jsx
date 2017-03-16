import React from 'react';
import { hashHistory } from 'react-router';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      query: ''
    };
  }


  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{top: 20, position: 'absolute', width: 300, height: 300 }}
      />
    );
  }
}

export { AuthPage };
