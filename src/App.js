import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import { Udash, Client,  ClientSignup, Idash} from './components';
import Hamburger from './components/Hamburger'
import { PrivateRoute } from './utils';
import {StyledHeader, StyledDiv} from './styles/StyledClient'
import logo from './UI/Alex/assets/logo.svg'

function App() {

  const getLogo = () => {
    if(logo){
      return (<img id='logo' style={{position: ''}} src={logo} alt='logo'/>)
    }else {
      return (<div></div>)
    }
  }

  return (
    <div className="App">
      <StyledHeader>
        <Hamburger />
        <StyledDiv>
          {getLogo()}
          <h2 style={{transform: 'scaleY(3) scaleX(2.5)'}}>Anywhere Fitness</h2>
        </StyledDiv>
        {/* <a href={'https://youthful-curie-92bef1.netlify.app'}>Home</a>
        <Link to={'/'}>Login</Link>
        <Link to={'/signup'}>Signup</Link> */}
      </StyledHeader>
      <Switch>
        {/* Regular Routes */}
        <Route exact path='/signup' component={ClientSignup}/>
        <Route exact path='/' component={Client} />
      {/* Protected Routes */}
      <PrivateRoute exact path="/dashboard" Udash={Udash} Idash={Idash}/>
      </Switch>
    </div>
  );
}


export default App;
