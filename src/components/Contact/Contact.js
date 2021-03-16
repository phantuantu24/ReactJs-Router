import React, { Component } from 'react';
import './Contact.css';
import { Prompt } from 'react-router-dom'

class Contact extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isChecked: false
     }
   }

  check = (isCheck) => {
    this.setState({
      isChecked: isCheck
    })
  }
   
  render() {
    return (
      <div>
        <h2>This is Contact Page</h2>
        
        <button type="button" onClick={() => this.check(true)} className="btn btn-default">Allow Redirect Without Confirm</button>
        <button type="button" onClick={() => this.check(false)} className="btn btn-danger">Must Confirm When Redirect</button>
        
        <Prompt 
          when={this.state.isChecked}
          message={(location) => (`Are you sure to go to ${location.pathname}`)}
        />
      </div>
    );
  }
}

export default Contact;