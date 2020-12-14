import React from 'react';
import { Route, Redirect ,    
    RouteProps} from 'react-router-dom';
//handle redirection if login! custom hook
//AUTHENTICACTION RECOMMENDED REACT ROUTER DOOM
//Login --> signin --> HOMEPAGE


const IsUserRedirect= ({user, loggedInPath, children, ...props}) => {
    
    //check if user object exists ...State
    return ( 
        <Route {...props}
          render={() => {
            //what to render if user is in store.. localstorage
            if(!user){
              return children//render page or component ... user props
            }

            if(user){
              return (<Redirect 
                to={{
                  pathname: loggedInPath
                }}
              />);
            }

            return null;
          }}
        />
     );
}
 
export default IsUserRedirect;

export const ProtectedRoute = ({user, children, ...props}) =>{

  return (
    <Route 
      {...props}
      render={({location}) => {//comes from history
        if(user){//return children if user exists
          return children;
        }
        
        if(!user){
          return (
          <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },//from ... to
              }}
            />);
        }
        return null;
      }}
      />
  );
}