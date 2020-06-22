import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import './App.css';
import Client from './components/Client/Client'
import {StyledButton, StyledHeader} from './components/Client/StyledClient'

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <Link to={'/'}>Home</Link>
        <Link to={'/client/login'}>Client Login</Link>
        <Link to={'/client/signup'}>Client Signup</Link>
      </StyledHeader>

      <h1>Anywhere Fitness</h1>
      <Switch>
        <Route exact path='/client/login'>
          <Client />
        </Route>

        <Route exact path='/client/signup'>
          
        </Route>

        <Route path='/'>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
