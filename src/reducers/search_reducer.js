import { merge } from 'lodash';
import {
  RECEIVE_QUERY,
  CLEAR_QUERY } from "../actions/search_actions"

let _defaultState = null;

const searchReducer = (state = _defaultState, action) => {
  console.log(action);
  switch(action.type) {
    case RECEIVE_QUERY:
      return action.query;
    case CLEAR_QUERY:
      return null;
    default:
      return state;
  }
};

export default searchReducer;
