import React from 'react';

class Details extends React.Component {

  constuctor(props) {
    super(props);

    this.state = { details: [] };
  }

  _fetchDetails() {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.props.videoId}&key=${YT_API_KEY.publicDataKey}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({  });
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        Details
      </div>
    );
  }
}

export default Details;
