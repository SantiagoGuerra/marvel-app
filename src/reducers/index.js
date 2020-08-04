import { combineReducers } from 'redux';
import feedReducer from './feed';
import filterReducer from './filter';

const rootReducers = combineReducers({
  feed: feedReducer,
  filter: filterReducer,
});

export default rootReducers;
