import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../../firebase";

const ProtectedRoute = ({ location, children, path, ...rest }) => {
  return (
    <Route {...rest}>
      {!auth.currentUser ? (
        <Redirect
          to={{
            pathname: "/sign-in",
            state: { from: location },
          }}
        />
      ) : (
        <>{children}</>
      )}
    </Route>
  );
};

export default ProtectedRoute;
