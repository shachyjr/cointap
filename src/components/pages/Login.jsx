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
        console.log(xhttp.status);
        switch (xhttp.status) {
          case 200:
            // authenticated
            this.props.authorize(JSON.parse(xhttp.responseText));
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
      <div className="shift module-page">
        <form key="login-form" className="module" onSubmit={this.handleLogin}>
          <input className="text-input" type="text" onChange={this.usernameChange} placeholder="Username"></input>
          <input className="text-input" type="password" onChange={this.passwordChange} placeholder="Password"></input>
          <input className="submit-btn" type="submit" value="Login"></input>
          <NavLink key="register-redir" to="/register">{'Don\'t have an account? Register!'}</NavLink>
        </form>
      </div>
    );
  }
}
// <button onClick={()=>{this.props.redirect('/register')}}>Register</button>
export default Login;
