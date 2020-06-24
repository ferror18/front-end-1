import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import { Udash, Client,  ClientSignup, Idash} from './components';
import { PrivateRoute } from './utils';
import {StyledHeader, StyledDiv, StyledImgDiv} from './styles/StyledClient'
import logo from './UI/Alex/assets/logo.svg'
import wClass from './styles/wClass.jpeg'
import wClass2 from './styles/wClass2.jpeg'

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
      <Switch>
        {/* Regular Routes */}
        <Route exact path='/login' component={Client} />
        <Route exact path='/signup' component={ClientSignup}/>
        <Route exact path='/'/>
      {/* Protected Routes */}
      <PrivateRoute exact path="/dashboard" Udash={Udash} Idash={Idash}/>
      </Switch>
    </div>
  );
}


export default App;
