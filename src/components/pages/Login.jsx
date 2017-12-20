import React, { Component } from 'react';

const Login = ({ handleLogin, userNameChange, passwordChange }) => (
  <form onSubmit={handleLogin}>
    <input type="text" onChange={userNameChange} placeholder="username"></input>
    <input type="password" onChange={passwordChange} placeholder="password"></input>
    <input type="submit" value="Login"></input>
  </form>
)

export default Login;
