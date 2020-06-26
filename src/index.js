import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers'
import thunk from 'redux-thunk'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from "./styles/materialUi.js";
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
    {/* <ThemeProvider theme={theme}> */}
    <App/>
    {/* </ThemeProvider> */}
    </Router>
  </Provider>,

  document.getElementById('root')
)