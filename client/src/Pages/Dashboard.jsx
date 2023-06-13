import React, { useContext, useEffect } from 'react'
import RootLayout from '../layout/RootLayout'
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Scrabble from "../Asset/Images/unsplash_Z2bJeJQRbW0 (1).svg"

function Dashboard() {

  const { user, getCurrentUser} = useContext(AuthContext);
  useEffect(()=>{
    getCurrentUser();
  })

  return (
    <RootLayout>
        <div className=' d-flex flex-column align-item-center flex-md-row mw1240 mx-auto'> 
          <div className='text-md-start'>
            <h1>Welcome {user && user.username} </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quae explicabo animi consequuntur sit magnam excepturi rem blanditiis? Similique, voluptate?</p>
            <div>
              <Link to='/my-stories' className='btn bg-primary text-white justify-content-center justify-content-md-start px-4 '> My Stories</Link>
              <Link to='/feeds' className='btn border-blue text-blue px-4 px-lg-5'>Go to Feed</Link>
            </div>
          </div>
          <img className='w-50 mx-auto' src={Scrabble} alt='' />
        </div>
        
    </RootLayout>

  )
}

export default Dashboard