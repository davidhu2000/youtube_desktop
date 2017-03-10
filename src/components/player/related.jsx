import React from 'react';

class Related extends React.Component {

  componentDidMount() {
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=M7lc1UVf-VE&key=")
    .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        Related
      </div>
    );
  }
}

export default Related;
