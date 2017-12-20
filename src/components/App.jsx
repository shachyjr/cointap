import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NavBar from './NavBar';
import Dashboard from './pages/Dashboard.jsx';
import Track from './pages/Track.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

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
  }
  handleRegister(event) {
    event.preventDefault();
    console.log(this.state);
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
