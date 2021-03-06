import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
          <div className="nav-bar">
            <div className="logo-text">Store</div>
            <div className="search-box">
              <div className="field has-addons">
                <div className="control">
                  <input type="text" className="input search-input" placeholder="すべての商品から検索"/>
                </div>
                <div className="control">
                  <button className="button">X</button>
                </div>
              </div>
            </div>
            <div className="cart-box">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-num">(0)</span>
            </div>
          </div>
        )
    }
}

export default NavBar