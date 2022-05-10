import React from 'react'
import { formatPrice } from 'commons/helper'

class ProductItem extends React.Component {
    render() {
        const { name, tags, image, price } = this.props.product
        return (
          <div className="product-item">
            <div className="p-content">
              <figure className="image is-4by3">
                <img src={image} alt={name} />
              </figure>
              <p className="p-tags">{tags}</p>
              <p className="p-name">Nike Paul George PG 3</p>
            </div>
            <div className="p-footer">
              <p className="price">{formatPrice(price)}</p>
              <button className="add-cart">
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-excalamation"></i>
              </button>
            </div>
          </div>
        )
    }
}

export default ProductItem