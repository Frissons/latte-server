import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import {toast} from 'react-toastify';
import Spinner from '../../components/spinner/Spinner';


function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {  email, password } = formData;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message )  
    }
    if(isSuccess || user) {
      navigate('/');
    }
    dispatch(reset())
    
  }, [user, isError, isSuccess, message ,navigate,dispatch]) 


  const onchange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const loginUser = (e) => {
    e.preventDefault();
  const userData = {
    email,
    password
  }

  dispatch(login(userData))
    

  }

  if(isLoading){
    return <Spinner />
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