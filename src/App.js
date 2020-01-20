import React from 'react';
import logo from './logo.svg';
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Nav from "./Nav";
import './App.css';
import { reactDom } from "react-dom";
import Api from "./Api";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (     
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/Home" component={Home}></Route>
          <Route path="/Api" component = {Api}></Route>
          <Route path="/Register" component = {Register}></Route>
        <Route path="/Login" component={Login}></Route>
       </Switch>
      </Router>

  );
}

export default App;
