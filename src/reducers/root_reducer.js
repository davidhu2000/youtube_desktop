import { combineReducers } from 'redux';
import queryReducer from './query_reducer';

const rootReducer = combineReducers({
  query: queryReducer
});

export default rootReducer;
