import React from 'react';
import YT_API_KEY from '../../../config/api_key';

class Details extends React.Component {

  constructor(props) {
    super(props);

    this.state = { details: {} };
  }

  componentDidMount() {
    this._fetchDetails();
  }

  _fetchDetails() {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.props.videoId}&key=${YT_API_KEY.publicDataKey}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ details: responseJson.items[0].snippet });
      })
      .catch(error => {
        console.error(error);
      })
  }

  parseDate() {
    const months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "June",
      6: "July",
      7: "Aug",
      8: "Sept",
      9: "Oct",
      10: "Nov",
      11: "Dec"
    }
    let date = new Date(this.state.details.publishedAt);
    let newDate = "";

    newDate += months[date.getMonth()] + " ";
    newDate += date.getDate() + ", ";
    newDate += date.getFullYear();

    return newDate;
  }

  render() {
    return (
      <div className="details-container">
        <h5 className="details-date">
          Published on {this.parseDate()}
        </h5>
        <p className="description">
          {this.state.details.description}
        </p>
      </div>
    );
  }
}

export default Details;
