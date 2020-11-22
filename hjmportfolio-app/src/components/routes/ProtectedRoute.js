import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRouteHandler = ({ component, auth, ...rest }) => {
  const ComponentToRender = component;

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <ComponentToRender {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/Login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({ auth: state.auth.loggedIn });
export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(ProtectedRouteHandler)
);
