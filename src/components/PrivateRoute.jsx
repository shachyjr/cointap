import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => [
  <Route key="private-route" {...rest} render={() => (
    rest.user ? (
      <Component {...rest} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
];

export default PrivateRoute;
