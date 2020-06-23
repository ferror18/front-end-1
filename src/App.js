import React, {useState} from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import './styles/App.css';
import Client from './components/User/Client'
import ClientSignup from './components/User/ClientSignup'
import InsProfile from './components/Instructor/InsProfile'
import {StyledHeader} from './styles/StyledClient'

function App() {

  const initialId = ''

  const [id, setId] = useState(initialId)

  return (
    <div className="App">
      <StyledHeader>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}> Signup</Link>
      </StyledHeader>

      <h1>Anywhere Fitness</h1>
      <Switch>
        <Route exact path='/login'>
          <Client />
        </Route>

        <Route exact path='/signup'>
          <ClientSignup />
        </Route>

        <Route path='/instructor/profile'>
          <InsProfile />
        </Route>

        <Route path='/'>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
