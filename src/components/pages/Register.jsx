import React, { Component } from 'react';

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
      <div className="shift module-page">
        <form className="module" onSubmit={this.handleRegister}>
          <input type="text" onChange={this.nameChange} placeholder="Name"></input>
          <input type="text" onChange={this.usernameChange} placeholder="username"></input>
          <input type="text" onChange={this.emailChange} placeholder="email"></input>
          <input type="password" onChange={this.passwordChange} placeholder="password"></input>
          <input type="submit" value="Register"></input>
          <button onClick={()=>{this.props.redirect('/login')}}>Login</button>
        </form>
      </div>
    );
  }
}

export default Register;
