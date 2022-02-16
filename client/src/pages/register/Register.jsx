import { useState, useEffect } from "react";
import { BiUserCircle } from 'react-icons/bi';
import './register.css';
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

  const onchange = (prevState) => ({
    ...prevState,
    //name: e.target.value
  })



  return (
    <>
      <h1><BiUserCircle />Registration</h1>
      <p>Please fill all fields</p>
      <section className="heading">
        <div className="form">
          <ul className="form-group">
            <li>
              <input type="text" name="name" placeholder="Enter Name" />
            </li>
            <li>
              <input type="text" name="grade" placeholder="Enter Grade" />
            </li>
            <li>
              <input type="text" name="section" placeholder="Enter Section" />
            </li>
            <li>
              <input type="email" name="email" placeholder="Enter Email" />
            </li>
            <li>
              <input type="password" name="password" placeholder="Enter a Password" />
            </li>
            <li>
              <input type="password" name="password2" placeholder="Confirm password" />
            </li>
          </ul>
          <button type="submit" className="btn btn-block" >Submit</button>

        </div>
      </section>
    </>
  )
}

export default Register