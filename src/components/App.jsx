import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NavBar from './NavBar';
import Dashboard from './pages/Dashboard.jsx';
import Track from './pages/Track.jsx';

class App extends Component {
  render() {
    return [
      <NavBar/>,
      <Switch>
        <Route exact path='/' render={() => <Dashboard/>} />,
        <Route path='/track' render={() => <Track />} />
      </Switch>
    ];
  }
}

export default App;
