/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import HomePage from './pages/HomePage';
import Browse from './pages/Browse';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import * as ROUTES from './Routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (  

    <Router>

        <Route exact path="/browse">
          <Browse />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/signin">
          <SignIn />
        </Route>

        <Route exact path={ROUTES.HOME}>
          <HomePage />
        </Route>

    </Router>
  
  );
}

export default App;
