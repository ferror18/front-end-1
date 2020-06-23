import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import './styles/App.css';
import Client from './components/User/Client'
import ClientSignup from './components/User/ClientSignup'
import {StyledHeader} from './styles/StyledClient'
import {Alex} from '../src/components/UI/Alex'


function App() {

  const getHomePage= () => {
    let ranNum = Math.floor(Math.random() * 2 + 1)
    
  }

  return (
    <div className="App">
      {/* <StyledHeader>
        <Link to={'/'}>Home</Link>
        <Link to={'/client/login'}>Login</Link>
        <Link to={'/client/signup'}>Signup</Link>
      </StyledHeader>

      <h1>Anywhere Fitness</h1> */}
      <Switch>
        <Route exact path='/client/login'>
          <Client />
        </Route>

        <Route exact path='/client/signup'>
          <ClientSignup />
        </Route>

    <Route path='/'>{Alex}</Route>
      </Switch>
    </div>
  );
}

export default App;
