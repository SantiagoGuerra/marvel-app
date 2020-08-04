import { combineReducers } from 'redux';
import feedReducer from './feed';

const rootReducers = combineReducers({
  feed: feedReducer,
});

export default rootReducers;
