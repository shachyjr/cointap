import React, { Component } from 'react';

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
          <input type="text" onChange={this.usernameChange} placeholder="username"></input>
          <input type="password" onChange={this.passwordChange} placeholder="password"></input>
          <input type="submit" value="Login"></input>
          <button onClick={()=>{this.props.redirect('/register')}}>Register</button>
        </form>
      </div>
    );
  }
}

export default Login;
