import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import {useNavigate } from 'react-router-dom'




function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const { signUpUser, token }= useContext(AuthContext)

  useEffect(()=>{
    if (token) {
      navigate("/dashboard")
    } 
   })
  return (

    <div>
      <h1>Join Postit.</h1>
      <p>Enter your email address to create an account on Postit.</p>
      <form  onSubmit={(e)=>{
        e.preventDefault()
        const formData = {
          username,
          email,
          password
        }
        // console.log(formData);
        signUpUser(formData);


      }} className='px-5 d-flex flex-column gap-4'>
        <div>
          <label htmlFor='username'>Username</label>
          <input  className='border-0 border-bottom border-dark w-100' type='text' id='username'
          onChange = {(e) => {
            setUsername(e.target.value);
          }} 
          />
          
        </div>
        <div>
          <label htmlFor='email'>Your Email</label>
          <input  className='border-0 border-bottom border-dark w-100' type='email' id='email'
          onChange = { (e)=> {
            setEmail(e.target.value);
          }}/>
          
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input  className='border-0 border-bottom border-dark w-100' type='password' id='password' 
          onChange = {(e) => {
            setPassword(e.target.value);
          }}/>
          
        </div>
        <button className='btn bg-primary text-white w-100 fw-bold'> Continue</button>
      </form>
      <p> Already have an account</p>
      <p>Sign up</p>
    </div>
  )
}

export default SignUp


