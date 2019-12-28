import React from 'react';
import './Main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Videos from '../Videos/Videos';
import Quizes from '../Quizes/Quizes';

const Main = () => {
  return (
    <Router>
      <div className="container">
        <div className="side-menu">
          <div className="side-menu-items">
            <NavLink exact to="/" activeClassName="selected">Video Stream</NavLink>
          </div>
          <div className="side-menu-items">
            <NavLink to="/quize" activeClassName="selected">Quizes</NavLink>
          </div>
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Videos />
            </Route>
            <Route path="/quize">
              <Quizes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Main;