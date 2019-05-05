import React, { Component } from 'react';
import './App.css';

class Products extends Component {
  render() {
    const { title, products, images, id, width } = this.props;
    console.log(images);
    return (
      <div className="content product-section" id={id}>
        <div className="title header-title white">{title}</div>
        <div className="products">
          {products.map((product) => {
            return (
              <div className="product" style={{ maxWidth: `${width}px` }}>
                <div className="productTitle">{product.title}</div>
                <div className="imageWrapper">
                  <a href={product.image}>
                    <img className="image" src={product.image} alt="" />
                  </a>
                </div>
                <div className="properties">
                  {product.properties.map((property) => {
                    return (
                      <div>{property}</div>
                    )})
                  }
                </div>
              </div>
            )})
          }
        </div>
      </div>
    );
  }
}

export default Products;
