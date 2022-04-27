import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="grid">
                    <div className="start">
                        <a href="/">HOME</a>
                    </div>
                    <div className="end">
                        <a href="/">ログイン</a>
                        <a href="/">登録</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header