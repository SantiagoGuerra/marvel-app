import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataForFeed } from './middlewares';
import FeedContainer from './components/FeedContainer';
import Filter from './components/Filter';
import { changeFilter } from './actions';

function App() {
  const feed = useSelector(state => state.feed);
  const filter = useSelector(state => state.filter)
  const currentCategory = useSelector(state => state.filter.currentCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataForFeed(currentCategory));
  }, [feed]);

  return (

    <div>
      <Filter changeFilter={changeFilter} dispatch={dispatch}/>
      <FeedContainer feed={feed} filter={filter} />
    </div>
  );
}

export default App;
