import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataForFeed } from './middlewares';
import { changeCurrentCategory } from './actions';

function App() {
  const state = useSelector(state => state);
  const { currentCategory } = state.filter;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataForFeed(currentCategory));
  }, [dispatch, currentCategory]);

  return (
    <div>

      <button onClick={() => {
        dispatch(changeCurrentCategory('stories'));
      }}
      >
        Change
      </button>

      {console.dir(state)}

      Main Application
    </div>
  );
}

export default App;
