import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Sites from "./Pages/Sites"
import Carrrousel from "./Pages/Carrousel";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Sites}/>
    <Route exact path="/carrousel/:site" component={Carrrousel}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
