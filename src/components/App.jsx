import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Dashboard from './pages/Dashboard.jsx';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={()=><Dashboard/>} />
      </Switch>
    );
  }
}

export default App;
