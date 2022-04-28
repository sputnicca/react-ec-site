import React from 'react'

const Header = props => {
  return (
    <div className="header">
      <div className="grid">
        <div className="start">
          <a href="/">HOME</a>
        </div>
        <div className="end">
          {/* {this.renderLink()} */}
          {props.nickname ? (
            <span className="nickname">
              <i className="far fa-user"></i>
                {props.nickname}
            </span>
            ) :
            (
              <>
                <a href="/">ログイン</a>
                <a href="/">登録</a>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header
// class Header extends React.Component {
    // renderLink() {
    //     const nickname = this.props.nickname
    //     if(nickname){
    //         return (
    //             <span className="nickname">
    //               <i className="far fa-user"></i>
    //               {/* this=Headerコンポーネント */}
    //               {this.props.nickname}
    //             </span>
    //         )
    //     } else {
    //         return (
    //             <>
    //               <a href="/">ログイン</a>
    //               <a href="/">登録</a>
    //             </>
    //         )
    //     }
    // }
//     render() {
//         return (
//             <div className="header">
//                 <div className="grid">
//                     <div className="start">
//                         <a href="/">HOME</a>
//                     </div>
//                     <div className="end">
//                         {/* {this.renderLink()} */}
//                         {this.props.nickname ? (
//                             <span className="nickname">
//                                 <i className="far fa-user"></i>
//                                 {this.props.nickname}
//                             </span>
//                         ) :
//                         (
//                             <>
//                               <a href="/">ログイン</a>
//                               <a href="/">登録</a>
//                             </>
//                         )
//                         }
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }