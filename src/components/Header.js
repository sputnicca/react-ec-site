import React from 'react'

class Header extends React.Component {
    renderLink() {
        const nickname = this.props.nickname
        if(nickname){
            return (
                <span className="nickname">
                  {/* this=Headerコンポーネント */}
                  {this.props.nickname}
                </span>
            )
        } else {
            return (
                <>
                  <a href="/">ログイン</a>
                  <a href="/">登録</a>
                </>
            )
        }
    }
    render() {
        return (
            <div className="header">
                <div className="grid">
                    <div className="start">
                        <a href="/">HOME</a>
                    </div>
                    <div className="end">
                        {this.renderLink()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header