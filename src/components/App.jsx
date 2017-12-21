import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NavBar from './NavBar/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import Track from './pages/Track.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

import './global-style.css';

class App extends Component {
  constructor() {
    super();
    this.state = { name: '', username: '', password: '', email: '' };

    this.nameChange = this.nameChange.bind(this);
    this.userNameChange = this.userNameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  nameChange(event) {
    this.setState({ name: event.target.value });
  }
  userNameChange(event) {
    this.setState({ username: event.target.value });
  }
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    console.log(this.state);
    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state),
    }).then((resp) => {
      if (resp.status === 401) {
        // incorrect username or password

      }

      console.log(resp)
    }).then((data) => {
      if (data.s)
      console.log(data)
    });
  }
  handleRegister(event) {
    event.preventDefault();
    console.log(this.state);
    fetch('/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json()
    }).then((data) => {
      console.log(data)
    });
  }

  render() {
    return [
      <NavBar/>,
      <Switch>
        <Route exact path='/' render={() => <Dashboard/>} />,
        <Route path='/track' render={() => <Track/>} />,
        <Route path='/login' render={() => <Login handleLogin={this.handleLogin} userNameChange={this.userNameChange} passwordChange={this.passwordChange} />} />,
        <Route path='/register' render={() => <Register handleRegister={this.handleRegister} nameChange={this.nameChange} userNameChange={this.userNameChange} emailChange={this.emailChange} passwordChange={this.passwordChange} />} />
      </Switch>
    ];
  }
}

export default App;
