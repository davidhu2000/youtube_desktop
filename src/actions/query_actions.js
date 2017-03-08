export const RECEIVE_QUERY = 'RECEIVE_QUERY';
export const CLEAR_QUERY = 'CLEAR_QUERY';

export const receiveQuery = query => ({
  type: RECEIVE_QUERY,
  query
});

export const clearQuery = () => ({
  type: CLEAR_QUERY
});
