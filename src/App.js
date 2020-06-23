import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Client from './components/User/Client'
import ClientSignup from './components/User/ClientSignup'
import ClassListing from './components/ClassListing/ClassListing'
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
        <Link to={'/class'}>Class List</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Signup</Link>
      </StyledHeader>
      
      <Switch>

        <Route exact path='/class'>
          <ClassListing />
        </Route>

        <Route exact path='/login'>
          <Client />
        </Route>

        <Route exact path='/signup'>
          <ClientSignup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
