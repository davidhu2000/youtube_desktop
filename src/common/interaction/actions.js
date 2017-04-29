import * as InteractionAPI from './util';
import { receiveVideoRating } from 'modules/player/actions';

export const RATING_STATUS = 'RATING_STATUS';

export const ratingStatus = rating => ({
  type: RATING_STATUS,
  rating
});

export const videosRate = (videoId, rating) => dispatch => {
  return InteractionAPI.videosRate(videoId, rating).then(
    res => dispatch(receiveVideoRating(rating))
  ).catch(
    err => console.log(err)
  );
};
