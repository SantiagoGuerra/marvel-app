import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeedContainer from '../components/FeedContainer';
import { getDataForFeed } from '../middlewares';

function Home() {
  const feed = useSelector(state => state.feed);
  const filter = useSelector(state => state.filter);
  const currentCategory = useSelector(state => state.filter.currentCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataForFeed(currentCategory));
  }, [dispatch, currentCategory]);

  return (
    <>
      <FeedContainer feed={feed} filter={filter} />
    </>
  );
}

export default Home;
