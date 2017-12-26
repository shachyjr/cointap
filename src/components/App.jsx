import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Track from './pages/Track.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx';
import PrivateRoute from './PrivateRoute.jsx';

import '../styles/style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = { user: null };

    this.redirect = this.redirect.bind(this);
    this.authorize = this.authorize.bind(this);
  }

  redirect(route) {
    this.props.history.push(route);
  }

  authorize(user) {
    console.log('User authorized: ', user);
    this.setState({ user: user });
    this.props.history.push('/track');
  }

  render() {
    return (
      <div id="container">
        <NavBar key="navbar-component"/>
        <Switch key="routes">
          <Route exact path='/' render={() => <Dashboard/>} />,
          <Route path='/login' render={() => <Login authorize={this.authorize} redirect={this.redirect} />} />,
          <Route path='/register' render={() => <Register authorize={this.authorize} redirect={this.redirect} />} />,
          <PrivateRoute path="/track" component={Track} user={this.state.user} />
          <Route path="/*" render={() => <NotFound />} />
        </Switch>
      </div> 
    );
  }
}

export default withRouter(App);
