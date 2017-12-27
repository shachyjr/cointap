import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = { 
      name: '',
      username: '',
      password: '',
      email:'',
    };

    this.nameChange = this.nameChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  nameChange(event) {
    this.setState({ name: event.target.value });
  }
  usernameChange(event) {
    this.setState({ username: event.target.value });
  }
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleRegister(event) {
    event.preventDefault();
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/api/register', true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        console.log(xhttp.status);
        switch (xhttp.status) {
          case 200:
            // authenticated
            this.props.authorize(JSON.parse(xhttp.responseText));
            break;
          case 409:
            // username already exists
            break;
          default:
            // error message
        }
      }
    }
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({ name: this.state.name, username: this.state.username, password: this.state.password, email: this.state.email }));
  }

  render() {
    return (
      <div className="auth-form">
        <form onSubmit={this.handleRegister}>
          <input className="text-input" type="text" onChange={this.nameChange} placeholder="Name"></input>
          <input className="text-input" type="text" onChange={this.usernameChange} placeholder="Username"></input>
          <input className="text-input" type="text" onChange={this.emailChange} placeholder="Email"></input>
          <input className="text-input" type="password" onChange={this.passwordChange} placeholder="Password"></input>
          <input className="submit-btn" type="submit" value="Register"></input>
          <NavLink key="login-redir" to="/login">{'Have an account? Login!'}</NavLink>
        </form>
      </div>
    );
  }
}
// <button onClick={()=>{this.props.redirect('/login')}}>Login</button>

export default Register;
