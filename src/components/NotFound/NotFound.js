import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {

    const errorCSS = {
      color: 'red',
      fontWeight: 'bold'
    }

    return (
      <div>
        <h3 style={errorCSS}>404 - Page Not Found</h3>
      </div>
    );
  }
}

export default NotFound;