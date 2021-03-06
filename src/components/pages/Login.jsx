import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  usernameChange(event) {
    this.setState({ username: event.target.value });
  }
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleLogin(event) {
    event.preventDefault();
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/api/login', true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        const respData = JSON.parse(xhttp.responseText);

        switch (xhttp.status) {
          case 200:
            // authenticated
            this.props.authorize(respData.user);
            break;
          case 400: 
            // username specified does not exist
            
            break;
          case 401:
            // incorrect username or password
            break;
          default:
            // error message
        }
      }
    }
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({ username: this.state.username, password: this.state.password }));
  }

  render() {
    return (
      <center>
        <div className="auth-form-container">
          <h4 className="header">LOG IN</h4>
          <form className="form-login" onSubmit={this.handleLogin}>
            <center>
              <div className="text-input">
                <input type="text" autoComplete="username" onChange={this.usernameChange} placeholder="Username or email" required></input>
                <i className="fa fa-user-o"></i>
              </div>
            </center>
            <center>
              <div className="text-input">
                <input type="password" autoComplete="current-password" onChange={this.passwordChange} placeholder="Password" required></input>
                <i className="fa fa-lock"></i>
              </div>
            </center>
            <center>
              <input className="submit-btn" type="submit" value="submit"></input>
            </center>
            <div className="redir">
              <NavLink key="register-redir" to="/register">Register</NavLink>
              <NavLink key="fg-pw-redir" to="/forgotpw">Forgot Password?</NavLink>
            </div>
          </form>
        </div>
      </center>
    );
  }
}

export default Login;
