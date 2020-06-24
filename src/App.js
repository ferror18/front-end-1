import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import {Udash } from './components';
import { PrivateRoute } from './utils';
import Client from './components/User/Client'
import ClientSignup from './components/User/ClientSignup'
import Class from './components/Class/Class'
import {StyledHeader, StyledDiv} from './styles/StyledClient'
import logo from './UI/Alex/assets/logo.svg'

function App() {

  const getLogo = () => {
    if(logo){
      return (<img id='logo' src={logo} alt='logo'/>)
    }else {
      return (<div></div>)
    }
  }

  return (
    <div className="App">
      <StyledHeader>
        <StyledDiv>
          {getLogo()}
          <h2>Anywhere Fitness</h2>
        </StyledDiv>
        <a href={'https://youthful-curie-92bef1.netlify.app'}>Home</a>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Signup</Link>
      </StyledHeader>
      <h1>Anywhere Fitness</h1>
      <Switch>
        <Route exact path='/class'>
          <Class />
        </Route>

        <Route exact path='/login'>
          <Client />
        </Route>

        <Route exact path='/signup'>
          <ClientSignup />
        </Route>

        <Route>
          <PrivateRoute exact path="/udash" component={Udash} />
        </Route>

        <Route path='/'>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
