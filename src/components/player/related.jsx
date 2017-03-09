import React from 'react';

class Related extends React.Component {

  componentDidMount() {
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=M7lc1UVf-VE")
    .then(res => console.log(res))
    .catch(err => console.error(err));
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
