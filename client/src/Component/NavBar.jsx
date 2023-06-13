import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function NavBar() {
  const {token, logOutUser} = useContext(AuthContext)
  return (
    <div className='d-flex py-3 mw1240 justify-content-between  align-item-center mx-auto'> 
      <Link className='text-decoration-none text-dark fw-bold fs-2'  to="/">Post<span className='text-blue'>it</span>.</Link>
      <div className='d-flex align-items-center gap-3'>
        <Link className='text-decoration-none text-dark fw-bold' to="/dashboard">Stories</Link>
        <Link className='text-decoration-none text-dark fw-bold'>Contact</Link>
        {token ? <Link onClick={()=>{
          logOutUser()
        }} className='btn btn-danger px-4'>Logout</Link> : <div>
        <Link className='text-decoration-none text-dark fw-bold' to="/login">Sign In</Link>
        <Link className='btn bg-primary text-white fw-bold p-left' to="/signup">Get Started</Link>
          </div>}
      </div>
    </div>
    
  )
}

export default NavBar