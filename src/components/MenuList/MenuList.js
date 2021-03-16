import React, { Component } from 'react';
import './MenuList.css';
import { Link, Route } from 'react-router-dom'

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: true
  },
  {
    name: 'About',
    to: '/about',
    exact: true
  },
  {
    name: 'Products',
    to: '/products',
    exact: false
  },
  
]

const MyCustomNavLink = ({ label, to, activeOnlyWhenExact }) => {
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

const showMenu = (menus) => {
  if (menus.length > 0) {
    return menus.map((menu, index) => (
      <MyCustomNavLink 
        key={index} 
        label={menu.name} 
        to={menu.to} 
        activeOnlyWhenExact={menu.exact} 
      />
    ))
  }
}
class MenuList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            {showMenu(menus)}
          </ul>
        </nav>
      </div>
    );
  }
}

export default MenuList;