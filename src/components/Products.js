import React from 'react'
import NavBar from './NavBar'
import ProductItem from './ProductItem'

class Products extends React.Component {
    render() {
        return (
            <>
              <NavBar />
              <div className="products">
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
            </>
        )
    }
}

export default Products