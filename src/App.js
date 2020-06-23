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
        <a href={'https://youthful-curie-92bef1.netlify.app'}>Home</a>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Signup</Link>
      </StyledHeader>
      
      <Switch>
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
