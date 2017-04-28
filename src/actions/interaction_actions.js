import * as InteractionAPI from '../util/interaction_util';
import { receiveVideoRating } from './youtube_video_actions';

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
