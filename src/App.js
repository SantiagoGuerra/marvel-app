import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Grommet } from 'grommet';

import Character from './pages/Character';
import Home from './pages/Home';
import LayoutContainer from './layout/LayoutContainer';

function App() {
  return (

    <Grommet plain>
      <Router>
        <Switch>

          <LayoutContainer>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/characters/:id">
              <Character />
            </Route>
          </LayoutContainer>
        </Switch>
      </Router>

    </Grommet>
  );
}

export default App;
