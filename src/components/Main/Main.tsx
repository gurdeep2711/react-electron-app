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
import ThemeProvider, { ThemeContext } from '../../providers/theme';

const Main = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ currentTheme, updateTheme }) => {
          return <Router>
            <div className="container">
              <div className={`side-menu ${currentTheme}`}>
                <div className="side-menu-items">
                  <NavLink exact to="/" activeClassName="selected">Video Stream</NavLink>
                </div>
                <div className="side-menu-items">
                  <NavLink to="/quize" activeClassName="selected">Quizes</NavLink>
                </div>
                <div className="side-menu-items bottom">
                  <div className="theme">
                    <span>
                      Current: {currentTheme}
                    </span>
                    <button className={currentTheme} onClick={() => updateTheme()}>Toggle Theme</button>
                  </div>
                </div>
              </div>
              <div className={`main ${currentTheme}`}>
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
        }}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default Main;