import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import './App.css';
import Client from './components/Client/Client'
import {StyledClient, StyledButton} from './components/Client/StyledClient'

function App() {
  return (
    <div className="App">
      <h1> Anywhere Fitness </h1>
      <Switch>
        <Route exact path='/client'>
          <Client />
        </Route>

        <Route path='/'>
        <Link to={'/client'}><StyledButton>Client</StyledButton></Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
