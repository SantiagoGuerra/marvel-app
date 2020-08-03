import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersData } from './middlewares';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersData());
  }, [dispatch]);

  return (
    <div>
      Main Application
    </div>
  );
}

export default App;
