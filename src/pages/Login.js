import React from 'react'
// import { useNavigate } from 'react-router-dom'
const Login = () => {
    const emailRef = React.createRef()
    const passwordRef = React.createRef()

    // const history = useNavigate()
    const handleSubmit = event => {
      event.preventDefault()
      // formのデータを取得
      console.log(emailRef)
      // 登録のロジック処理
      // 登録完了したら、HOME画面に遷移
      // history('/')
    }
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="メールアドレス" ref={emailRef} />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="パスワード" ref={passwordRef} autoComplete="off" />
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>
      </div>
    )
}

export default Login