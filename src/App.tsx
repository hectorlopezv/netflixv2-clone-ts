/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import HomePage from './pages/HomePage';
import Browse from './pages/Browse';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import * as ROUTES from './Routes';
import {
  BrowserRouter as Router, Switch
} from "react-router-dom";

import IsUserRedirect, {ProtectedRoute} from './utils/redirection/routes';
import useAuthListener from './hooks/user_auth_listener';

const App = () => {

  const [user] = useAuthListener();


  return (  

    <Router>


      <Switch>



      <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE}  
          path={ROUTES.SIGN_IN}
          exact={true}
        >
            <SignIn />
        </IsUserRedirect>
      
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE}  
          path={ROUTES.SIGN_UP}
          exact={true}
        >
            <SignUp />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact={true}>
            <Browse />
        </ProtectedRoute>
      <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE}  
          path={ROUTES.HOME}
          exact={true}
        >
            <HomePage />
        </IsUserRedirect>


      </Switch>

    </Router>
  
  );
}

export default App;
