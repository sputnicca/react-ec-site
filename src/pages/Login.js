import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const history = useNavigate()
    const handleSubmit = event => {
      event.preventDefault()
      // formの入力データを取得
      console.log(email)
      console.log(password)
      // 登録のロジック処理
      // 登録完了したら、HOME画面に遷移
      // history('/')
    }
    const handleChange = event => {
      event.target.name === 'email' ? setEmail(event.target.value) : setPassword(event.target.value)
    }
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" name="email" placeholder="メールアドレス" value={email} onChange={handleChange}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" name="password" placeholder="パスワード" autoComplete="off" value={password} onChange={handleChange} />
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