import { combineReducers } from 'redux';
import feedReducer from './feed';
import filterReducer from './filter';
import characterInfoReducer from './characterInfo';

const rootReducers = combineReducers({
  feed: feedReducer,
  filter: filterReducer,
  characterInfo: characterInfoReducer,
});

export default rootReducers;
