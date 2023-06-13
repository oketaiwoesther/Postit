import React from 'react'
import facebook from '../Asset/Images/facebook.jpg'
// import insta from '../Asset/Images/insta.jpg'
import { AiFillTwitterSquare } from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa'
import {RiLinkedinBoxFill} from 'react-icons/ri'



function Footer() {
  return (
    <div className='main-footer text-lg-start'>
      <div className='row mw1240 mx-auto'> 
      <div className='col-lg-5 ps-lg-0'>
      <h2>About Post<span className='text-blue'>it</span>.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nulla nihil modi incidunt, laborum tempore expedita accusantium cupiditate aut quidem provident porro quasi alias consequatur explicabo et, repellat beatae totam!</p>
    </div>
    <div className='col-lg-2'>
      <h2>Quick Menu</h2>
      <div>
        <p>Home</p>
        <p>Stories</p>
        <p>Trending Stories</p>
        <p>Popular Stories</p>
      </div>
      </div>
      <div className='col-lg-2'>
      <p>Sign Up</p>
      <p>Login</p>
      <p>Contact Us</p>
      </div>
      <div className='col-lg-3 pe-lg-0'>
        <h2>Subscribe to our newsletter</h2>
        <div  className='d-flex justify-content-end mx-auto bg-white p-1 ps-3 w-100'>
          <input type="text" className='border-0 w-100' placeholder='Enter Email Address' />
          <button className='btn text-white bg-blue rounded-1 '>Subscribe</button>
        </div>
      </div>

      </div>
      

        <div className='text-end mw1240 mx-auto border-top py-4 mt-4'>
        <p>Terms and Policy</p>
        <div>
          
          <AiFillTwitterSquare/>
          <FaFacebook/>
          <RiLinkedinBoxFill/>
          <img src='' alt=''/>
          <img src='' alt=''/>
          <img src alt=''/>
        </div>
      </div>

    </div>
  )
}

export default Footer
