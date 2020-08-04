import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { getDataForFeed } from './middlewares';

import Character from './pages/Character';

function App() {

  return (

    <div>
      <Router>
        <Switch>
          <Route path="/characters/:id">
            <Character />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
