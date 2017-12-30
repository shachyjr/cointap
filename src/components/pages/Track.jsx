import React, { Component } from 'react';

class Track extends Component {
  componentDidMount() {
    /* Fetch tracked items for user */ 
    this.props.user
  }
  render() {
    return (
      <div id="tracking">
        <h1 key="track-heading">Hello {this.props.user.name}, <br/> Your Tracked Items Would Reside Here!</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
// <button onClick={}>Logout</button>

export default Track;
