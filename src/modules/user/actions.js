import * as UserAPI from './utils';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const loginUser = () => dispatch => {
  UserAPI.authenticateUser(dispatch);
};
