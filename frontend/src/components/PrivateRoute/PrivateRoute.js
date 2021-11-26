import React, { useContext, createContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";

function PrivateRoute({ children, ...rest }) {
        const {user,isLoading} = useAuth();

        if(isLoading){
          return <Spinner animation="border" variant="danger"/>
        }

        return (
          <Route
            {...rest}
            
            render={({ location }) =>
              user.email ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/signin",
                    state: { from: location },
                    message : 'Please login to visit this page'
                  }}
                />
              )
            }
          />
        );
      }
      


export default PrivateRoute;