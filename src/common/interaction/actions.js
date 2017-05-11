import * as YoutubeApi from 'core/youtube_api';
import { receiveVideoRating } from 'modules/player/actions';

export const RATING_STATUS = 'RATING_STATUS';

export const ratingStatus = rating => ({
  type: RATING_STATUS,
  rating
});

export const videosRate = (videoId, rating) => dispatch => {
  let params = {
    id: videoId,
    rating
  };

  return YoutubeApi.videosRate(params).then(
    () => dispatch(receiveVideoRating(rating))
  ).catch(
    err => console.log(err)
  );
};
