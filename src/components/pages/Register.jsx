import React, { Component } from 'react';

const Register = ({ handleRegister, nameChange, userNameChange, emailChange, passwordChange }) => (
  <form onSubmit={handleRegister}>
    <input type="text" onChange={nameChange} placeholder="Name"></input>
    <input type="text" onChange={userNameChange} placeholder="username"></input>
    <input type="text" onChange={emailChange} placeholder="email"></input>
    <input type="password" onChange={passwordChange} placeholder="password"></input>
    <input type="submit" value="Register"></input>
  </form>
)

export default Register;
