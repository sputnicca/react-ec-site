import React from 'react'
import NavBar from './NavBar'
import ProductItem from './ProductItem'

class Products extends React.Component {
    render() {
        return (
            <>
              <NavBar />
              <div className="products">
                <div className="columns is-multiline is-desktop">
                  <div className="column is-3">
                    <ProductItem />
                  </div>
                  <div className="column is-3">
                    <ProductItem />
                  </div>
                  <div className="column is-3">
                    <ProductItem />
                  </div>
                  <div className="column is-3">
                    <ProductItem />
                  </div>
                  <div className="column is-3">
                    <ProductItem />
                  </div>
                </div>
              </div>
            </>
        )
    }
}

export default Products