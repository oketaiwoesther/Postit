import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loginUser, token} = useContext(AuthContext); 
  const navigate = useNavigate();

  useEffect(()=>{
    if(token){
      navigate("/dashboard");
    }

  })

  return (
    <div>
      <h1 className='py-3'>Welcome Back</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        const formData ={
          email,
          password,
        };
        console.log(formData);
        loginUser(formData);
      }} className='d-flex flex-column gap-4 px-4'>
        <div>
          <label className='fw-semibold' htmlFor='email'>Your Email Address</label>
          <input onChange={(e)=> {
            setEmail(e.target.value);
          }} 
          className='border-0 border-bottom border-dark w-100' type='email'/>
        </div>
        <div>
        <label className='fw-semibold' htmlFor='password'>password</label>
        <input onChange={(e)=> {
            setPassword(e.target.value);
          }}
        className='border-0 border-bottom border-dark w-100' type='password'/>
        </div>
        <button className='btn bg-primary text-white '>Continue</button>
      </form>
      <p> Already have an account</p>
      <p>Sign up</p>
    </div>
  )
}

export default Login
