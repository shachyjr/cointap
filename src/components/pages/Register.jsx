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
        const respData = JSON.parse(xhttp.responseText);

        console.log(`${xhttp.status} : ${respData.error}`);
        
        switch (xhttp.status) {
          case 200:
            // authenticated
            this.props.authorize(respData.user);
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
      <center>
        <div className="auth-form-container">
          <h4 className="header">REGISTER</h4>
          <form className="form-register" onSubmit={this.handleRegister}>
            <center>
              <div className="text-input">
                <input type="text" autoComplete="name" onChange={this.nameChange} placeholder="Name"></input>
                <i className="fa fa-id-card-o"></i>
              </div>
            </center>
            <center>
              <div className="text-input">
                <input type="text" autoComplete="username" onChange={this.usernameChange} placeholder="Username"></input>
                <i className="fa fa-user-o"></i>
              </div>
            </center>
            <center>
              <div className="text-input">
                <input type="email" autoComplete="email" onChange={this.emailChange} placeholder="Email"></input>
                <i className="fa fa-envelope-o"></i>
              </div>
            </center>
            <center>
              <div className="text-input">
                <input type="password" autoComplete="new-password" onChange={this.passwordChange} placeholder="Password"></input>
                <i className="fa fa-lock"></i>
              </div>
            </center>
            <center>
              <input className="submit-btn" type="submit" value="submit"></input>
            </center>
            <div className="redir">
              <NavLink key="login-redir" to="/login">Have an account? Login</NavLink>
            </div>
          </form>
        </div>
      </center>
    );
  }
}

export default Register;
