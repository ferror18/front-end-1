import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Client from './components/Client/Client'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/client'>
          <Client />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
