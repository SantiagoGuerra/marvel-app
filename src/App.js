import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Grommet } from 'grommet';

import Character from './pages/Character';
import Home from './pages/Home';

function App() {
  return (

    <Grommet plain>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/characters/:id">
            <Character />
          </Route>
        </Switch>
      </Router>

    </Grommet>
  );
}

export default App;
