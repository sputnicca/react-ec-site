import React from 'react'

class ProductItem extends React.Component {
    render() {
        return (
          <div className="product-item">
            <div className="p-content">
              <figure className="image is-4by3">
                <img src="" alt="商品名" />
              </figure>
              <p className="p-tags">25 colors</p>
              <p className="p-name">Nike Paul George PG 3</p>
            </div>
            <div className="p-footer">
              <p className="price">500000</p>
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