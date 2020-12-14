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
  console.log('entro aqui')
  console.log(user);

  return (  

    <Router>
      <Switch>

        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE}  
          path={ROUTES.SIGN_IN}
        
        >
            <SignIn />
        </IsUserRedirect>


        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE}  
          path={ROUTES.SIGN_UP}
      
        >
            <SignUp />
        </IsUserRedirect>


        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
            <Browse />
        </ProtectedRoute>


        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE}  
          path={ROUTES.HOME}
          exact
        >
            <HomePage />
        </IsUserRedirect>

      </Switch>

    </Router>
  
  );
}

export default App;
