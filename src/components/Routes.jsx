import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import Dashboard from './pages/Dashboard.jsx';
import Track from './pages/Track.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const Routes = ({authorize, logout, redirect, user}) => (
  <Switch key="routes">
    <Route exact path='/' render={() => <Dashboard/>} />,
    <Route path='/login' render={() => <Login authorize={authorize} redirect={redirect} />} />,
    <Route path='/register' render={() => <Register authorize={authorize} redirect={redirect} />} />,
    <PrivateRoute path="/track" component={Track} logout={logout} user={user} />,
    <Route path="/*" render={() => <NotFound />} />
  </Switch>
)

export default Routes;
