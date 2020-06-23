import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Client from './components/User/Client'
import ClientSignup from './components/User/ClientSignup'
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
        <Link to={'/'}>Home</Link>
        <Link to={'/client/login'}>Login</Link>
        <Link to={'/client/signup'}>Signup</Link>
      </StyledHeader>
      <div>
        <h3>Fitness anywhere and everywhere</h3>
        <p>We believe that everyone should have access to great fitness classes. Our mission is to make it as easy as possible for fitness instructors to host a class and fitness enthusiasts to find classes in their are</p>
      </div>
      <StyledImgDiv>
        <img src={wClass} alt='gym class'/>
      </StyledImgDiv>


      <Switch>
        <Route exact path='/client/login'>
          <Client />
        </Route>

        <Route exact path='/client/signup'>
          <ClientSignup />
        </Route>

        <Route path='/'>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
