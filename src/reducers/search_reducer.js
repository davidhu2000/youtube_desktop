import { merge } from 'lodash';
import {
  RECEIVE_QUERY,
  CLEAR_QUERY } from "../actions/search_actions.js"

let _defaultState = {};

const searchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUERY:
      // your code here
    case CLEAR_QUERY:
      // your code here
    default:
      return state;
  }
};

export default searchReducer;