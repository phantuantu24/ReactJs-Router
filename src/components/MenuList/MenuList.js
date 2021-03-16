import React, { Component } from 'react';
import './MenuList.css';
import { Link, Route} from 'react-router-dom'

class MenuList extends Component {
  render() {

    function MyCustomNavLink({ label, to, activeOnlyWhenExact }) {
      return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
          const active = match ? 'active' : ''
          return (
            <li className={active}>
              <Link to={to} className="my-Link">{label}</Link>
            </li>
          )
        }} />
      )
    }
  
    return (
      <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <MyCustomNavLink label="Home" to="/" activeOnlyWhenExact={true} />
            <MyCustomNavLink label="Contact" to="/contact" activeOnlyWhenExact={false} />
            <MyCustomNavLink label="About" to="/about" activeOnlyWhenExact={false} />
          </ul>
        </nav>
      </div>
    );
  }
}

export default MenuList;