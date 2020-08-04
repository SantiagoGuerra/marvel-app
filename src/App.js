import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataForFeed } from './middlewares';

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataForFeed('characters'));
  }, [dispatch]);

  return (
    <div>

      {console.dir(state)}

      Main Application
    </div>
  );
}

export default App;
