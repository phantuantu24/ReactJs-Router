import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      txtUsername: '',
      txtPassword: ''
    }
  }

  onChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.target === 'checkbox' ? target.checked : target.value
    this.setState({
      [name] : value
    })
  }

  onLogin = (e) => {
    e.preventDefault()
    const { txtUsername, txtPassword } = this.state
    if (txtUsername === 'admin' && txtPassword ==='admin') {
      localStorage.setItem('user', JSON.stringify({
        username: txtUsername,
        password: txtPassword
      }))
    }
  }
  
  render() {

    const { txtUsername, txtPassword } = this.state
    const { location } = this.props
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser !== null) {
      return <Redirect to={{
        pathname: '/about',
        state: {
          from: location
        }
      }}/>
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

            <form onSubmit={this.onLogin}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtUsername"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  value={txtUsername}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="txtPassword"
                  placeholder="Password"
                  value={txtPassword}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;