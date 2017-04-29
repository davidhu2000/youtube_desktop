import * as OauthAPI from '../util/oauth_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const loginUser = () => dispatch => {
  OauthAPI.authenticateUser(dispatch);
};
