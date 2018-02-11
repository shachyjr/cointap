import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { withCookies, Cookies } from 'react-cookie';
import NavBar from './NavBar.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Track from './pages/Track.jsx';
// import Login from './pages/Login.jsx';
// import Register from './pages/Register.jsx';
// import NotFound from './pages/NotFound.jsx';
// import PrivateRoute from './PrivateRoute.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import Loader from 'react-loaders';

import '../styles/style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      error: null,
      loading: true,
    };

    this.redirect = this.redirect.bind(this);
    this.authorize = this.authorize.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    /* 
      Makes call to server to verify if user had a valid session using cookie 
      This should only run on refresh when application is remounted, so that user object can persist through entire application
    */
    // TODO: Put in higher order component
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/api/userFromSession', true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        const respData = JSON.parse(xhttp.responseText);
        switch (xhttp.status) {
          case 200:
            // found user
            this.authorize(respData.user);
            break;
          case 401: 
            // cookie not found or user not found from exsiting cookie
            break;
          case 500:
            // internal error

            break;
          default:
            // error message
        }
        this.setState({ loading: false });
        console.log("this loading", this.state.loading);
      }
    }
    xhttp.send();
  }

  redirect(route) {
    this.props.history.push(route);
  }

  authorize(user) {
    this.setState({ user: user });
    this.props.history.push('/track');
  }

  logout() {
    this.setState({ user: null });
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/api/logout', true);
    xhttp.send();
  }

  render() {
    return (
      <div id="container">
        <NavBar key="navbar-component"/>
        <div id="pages">
          <Content loading={this.state.loading} authorize={this.authorize} redirect={this.redirect} logout={this.logout} user={this.state.user}/>
          
        </div>
        <Footer />
      </div> 
    );
  }
}

export default withCookies(withRouter(App));
// <Switch key="routes">
          //   <Route exact path='/' render={() => <Dashboard/>} />,
          //   <Route path='/login' render={() => <Login authorize={this.authorize} redirect={this.redirect} />} />,
          //   <Route path='/register' render={() => <Register authorize={this.authorize} redirect={this.redirect} />} />,
          //   <PrivateRoute path="/track" component={Track} logout={this.logout} user={this.state.user} />,
          //   <Route path="/*" render={() => <NotFound />} />
          // </Switch>