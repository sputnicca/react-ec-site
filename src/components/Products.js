import React from 'react'
import NavBar from './NavBar'
import ProductItem from './ProductItem'

class Products extends React.Component {
    product = [
      {
        name: 'Air Jordan 4',
        tags: '45 colors',
        image: '',
        price: 300000,
        status: 'available'
      },
      {
        name: 'Air Jordan 4',
        tags: '45 colors',
        image: '',
        price: 300000,
        status: 'available'
      },
      {
        name: 'Air Jordan 4',
        tags: '45 colors',
        image: '',
        price: 300000,
        status: 'available'
      },
      {
        name: 'Air Jordan 4',
        tags: '45 colors',
        image: '',
        price: 300000,
        status: 'available'
      },
      {
        name: 'Air Jordan 4',
        tags: '45 colors',
        image: '',
        price: 300000,
        status: 'available'
      }
    ]
    render() {
        return (
            <>
              <NavBar />
              <div className="products">
                <div className="columns is-multiline is-desktop">
                  {this.product.map(item => {
                    return (
                      <div className="column is-3">
                        <ProductItem product={item}/>
                      </div> 
                    )
                  })}
                </div>
              </div>
            </>
        )
    }
}

export default Products