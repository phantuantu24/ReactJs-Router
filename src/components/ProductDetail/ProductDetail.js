import React, { Component } from 'react';
import './ProductDetail.css';

class ProductDetail extends Component {
  render() {
    const { match } = this.props
    const idProduct = match.params.id
    console.log(match.params.id)
    return (
      <div>
        <h1>This is detail of product: {idProduct}</h1>
      </div>
    );
  }
}

export default ProductDetail;