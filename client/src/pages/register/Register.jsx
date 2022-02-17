import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {register,reset} from '../../features/auth/authSlice'

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    section: '',
    email: '',
    password: '', 
    password2: '',
  })

  const { name, email, password, password2, grade, section } = formData;

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

  const regUser = (e) => {
    e.preventDefault();

    if(password !== password2){
      toast.error('Passwords do not match')
    }else{
      const userData = {
        name, email, password, grade ,section
      }
      dispatch(register(userData))
    }

  }

  return (
    <>
      <section className="heading">
        <h1>Registration</h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={regUser}>
          <div className='form-group'>
            <input
              type="text"
              name="name"
              className='form-control'
              placeholder="Enter Name"
              value={name}
              onChange={onchange} />
          </div>
          <div className='form-group'>
            <input type="text"
              name="grade"
              className='form-control'
              placeholder="Enter Grade"
              value={grade}
              onChange={onchange} />
          </div>
          <div className='form-group'>
            <input
              type="text"
              name="section"
              className='form-control'
              placeholder="Enter Section"
              value={section}
              onChange={onchange} />
          </div>
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
          <div className='form-group'>
            <input
              type="password"
              name="password2"
              className='form-control'
              placeholder="Confirm password"
              value={password2}
              onChange={onchange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block" >Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register