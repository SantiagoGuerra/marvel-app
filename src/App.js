import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataForFeed } from './middlewares';
import FeedContainer from './components/FeedContainer';

function App() {
  const state = useSelector(state => state);
  const currentCategory = useSelector(state => state.filter.currentCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataForFeed(currentCategory));
  }, [dispatch, currentCategory]);

  return (
    <div>
      {console.log(state)}
      <FeedContainer feed={state.feed} filter={state.filter} />
    </div>
  );
}

export default App;
