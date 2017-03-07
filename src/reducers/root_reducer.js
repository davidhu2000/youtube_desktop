import { combineReducers } from 'redux';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
