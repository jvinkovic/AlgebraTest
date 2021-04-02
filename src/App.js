import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import User from './User';
import NASAPictureOfTheDay from './NASAPictureOfTheDay';

export default function App() {
  return (
      <div>
        <NavLink activeStyle={{backgroundColor: 'blue'}} to="/about">About page</NavLink><br/>
        <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/">Go to home</NavLink><br/>
        <Link to="/about/user/99">User settings</Link><br />
        <Link to="/nasa">NASA picture of the day</Link>

        <Switch>
          <Route path="/about/user/:userId">
            <User />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/nasa">
            <NASAPictureOfTheDay />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}