import React, { Component } from 'react';
import './Products.css';
import { NavLink, Route } from 'react-router-dom'
import ProductDetail from '../ProductDetail/ProductDetail';

class Products extends Component {
  render() {

    const products = [
      {
        id: 1,
        name: 'Samsung Galaxy s8',
        price: 5000
      },
      {
        id: 2,
        name: 'Iphone 7 Plus',
        price: 7000
      },
      {
        id: 3,
        name: 'Oppo F1s',
        price: 2500
      },
    ]

    const { match } = this.props
    const url = match.url

    const result = products.length > 0 ? products.map((item ) => (
      <NavLink to={`${url}/${item.id}`} key={item.id}>
        <li className="list-group-item">{item.id} - {item.name} - {item.price}</li>
      </NavLink>
    )) : <h3>Product List Is Empty</h3>

    return (
      <div>
        <h2>Product List</h2>
        <div className="row">
          <ul className="list-group">
            {result}
          </ul>
        </div>

        <div className="row">
          <Route path="/products/:id" component={ProductDetail} />
        </div>
        
      </div>
    );
  }
}

export default Products;