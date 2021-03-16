import React, { Component } from 'react';
import './About.css';

class About extends Component {

  render() {

    const { location } = this.props
    console.log(location)
    return (
      <div>
        <h2>This is About Page</h2>
      </div>
    );
  }
}

export default About;