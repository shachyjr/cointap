import React, { Component } from 'react';

class Track extends Component {
  render() {
    return (
      <div className="shift">
        <h1 key="track-heading" className="heading">Hello {this.props.user.name}, <br/> Your Tracked Items Would Reside Here!</h1>
      </div>
    );
  }
}

export default Track;