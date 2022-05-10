import React from 'react'
import { formatPrice } from 'commons/helper'

class ProductItem extends React.Component {
    render() {
        const { name, tags, image, price, status } = this.props.product
        const productClass = {
          available: 'product-item',
          unavailable: 'product-item out-stock'
        }
        return (
          <div className={productClass[status]}>
            <div className="p-content">
              <div className="img-wrapper">
                <div className="out-stock-text">在庫なし</div>
                <figure className="image is-4by3">
                  <img src={image} alt={name} />
                </figure>
              </div>
              <p className="p-tags">{tags}</p>
              <p className="p-name">Nike Paul George PG 3</p>
            </div>
            <div className="p-footer">
              <p className="price">{formatPrice(price)}</p>
              <button className="add-cart" disabled={status === 'unavailable'}>
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-exclamation"></i>
              </button>
            </div>
          </div>
        )
    }
}

export default ProductItem