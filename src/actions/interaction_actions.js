import * as InteractionAPI from '../util/interaction_util';

export const RATING_STATUS = 'RATING_STATUS';

export const ratingStatus = rating => ({
  type: RATING_STATUS,
  rating
});

export const videosRate = (videoId, rating, context) => {
  return InteractionAPI.videosRate(videoId, rating).then(
    res => context.setState({ rating })
  ).catch(
    err => console.log(err)
  );
};