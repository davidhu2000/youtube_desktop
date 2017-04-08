import React            from 'react';
import { fetchDetails } from '../../util/youtube_video_util';
import YT_API_KEY       from '../../../config/api_key';

class Details extends React.Component {

  constructor(props) {
    super(props);

    this.state = { details: {} };
  }

  componentDidMount() {
    fetchDetails(this.props.videoId, this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.videoId !== this.props.videoId) {
      fetchDetails(this.props.videoId, this);
    }
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
    };
    let date = new Date(this.state.details.publishedAt);
    let newDate = "";

    newDate += months[date.getMonth()] + " ";
    newDate += date.getDate() + ", ";
    newDate += date.getFullYear();

    return newDate;
  }

  addDescription() {
    if (this.state.details.description){
      let descript = this.state.details.description.slice(0,200);
      return <p className="description">{descript + "..."}</p>;
    }
  }

  render() {
    return (
      <div className="details-container">
        <h5 className="details-date">
          Published on {this.parseDate()}
        </h5>
        <p className="description">
          {this.addDescription()}
        </p>
      </div>
    );
  }
}

export default Details;
