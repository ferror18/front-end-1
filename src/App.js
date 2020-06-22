import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import './App.css';
import Client from './components/Client/Client'

function App() {
  return (
    <div className="App">
      <h1> Anywhere Fitness </h1>
      <Switch>
        <Route path='/client'>
          <Client />
        </Route>

        <Route path='/'>
        <Link to={'/client'}><button>Client Login/Signup</button></Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
