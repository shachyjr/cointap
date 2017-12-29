import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { withCookies, Cookies } from 'react-cookie';
import NavBar from './NavBar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Track from './pages/Track.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Modal from './Modal.jsx';

import '../styles/style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = { user: null };

    this.redirect = this.redirect.bind(this);
    this.authorize = this.authorize.bind(this);
  }

  componentWillMount() {
    console.log('Mounting App');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/api/getUser', true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        console.log(xhttp.status);
        switch (xhttp.status) {
          case 200:
            // authenticated
            this.authorize(JSON.parse(xhttp.responseText));
            break;
          case 401:
            // username already exists
            break;
          case 500:
            // username already exists
            break;
          default:
            // error message
        }
      }
    }
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send();
  }

  redirect(route) {
    this.props.history.push(route);
  }

  authorize(user) {
    this.setState({ user: user });
    console.log('state: ', this.state);
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
          <PrivateRoute path="/track" component={Track} user={this.state.user} />,
          <Route path='/modal' render={() => <Modal authorize={this.authorize} redirect={this.redirect} />} />
          <Route path="/*" render={() => <NotFound />} />
        </Switch>
      </div> 
    );
  }
}

export default withCookies(withRouter(App));
