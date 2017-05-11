import { RECEIVE_QUERY, CLEAR_QUERY } from "./actions";

let _defaultState = null;

const queryReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_QUERY:
      return action.query;
    case CLEAR_QUERY:
      return null;
    default:
      return state;
  }
};

export default queryReducer;
