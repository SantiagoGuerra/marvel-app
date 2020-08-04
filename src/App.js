import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import Character from './pages/Character';
import Home from './pages/Home';

function App() {

  return (

    <div>
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

    </div>
  );
}

export default App;
