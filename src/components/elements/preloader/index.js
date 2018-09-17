import React, { Component } from 'react';
import './style.scss'

class Preloader extends Component {

  render() {
    return (
      <div className="Preloader">
        <div className="Preloader__wheel"/>
      </div>
    );
  }
}

export default Preloader;
