import React, { Component } from 'react';

class PreLoader extends Component {
  render() {
    return (
      <div className="preloader d-none">
        <div className="top-bg-dark" id="top-bg" style={{ display: 'none' }} />
        <div className="loader-middle" id="loader-middle" style={{ display: 'none' }} />
        <div className="bottom-bg-dark" id="bottom-bg" style={{ display: 'none' }} />
      </div>
    );
  }
}

export default PreLoader;
