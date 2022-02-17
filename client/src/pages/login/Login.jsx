import { useState, useEffect } from "react";



function Login() {

  const [formData, setFormData] = useState({

    email: '',
    password: ''
  })

  const {  email, password } = formData;

  const onchange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const loginUser = (e) => {
    e.preventDefault();

    

  }

  return (
    <>
      <section className="heading">
        <h1>Login</h1>
        <p>login and Start casting votes</p>
      </section>
      <section className="form">
        <form onSubmit={loginUser}>
          <div className='form-group'>
            <input
              type="email"
              name="email"
              className='form-control'
              placeholder="Enter Email"
              value={email}
              onChange={onchange} />
          </div>
          <div className='form-group'>
            <input
              type="password"
              name="password"
              className='form-control'
              placeholder="Enter a Password"
              value={password}
              onChange={onchange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block" >Login</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login