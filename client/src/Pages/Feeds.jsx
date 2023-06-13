import React, { useContext } from 'react'
import RootLayout from '../layout/RootLayout'
import { useFetch } from '../hooks/useFetch'
import scabble from '../Asset/Images/unsplash_Z2bJeJQRbW0 (1).svg'
import AuthContext from '../context/AuthContext'
import Loading from '../utils/Loading';
import forest from '../Asset/Images/Rectangle 7 (1).jpg'



function Feeds() {

  const { token} = useContext(AuthContext)
    
  const { data, loading, error} = useFetch('http://127.0.0.1:8000/api/stories/', token);
  console.log(data, error, loading);

  return <RootLayout>
<div className=' d-flex flex-column align-item-center flex-md-row mw1240 mx-auto'>
    <div className='text-md-start'>
        <h1>You've got a story, Postit</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ad ducimus neque saepe. Ab voluptatem quam repellendus laboriosam nemo quo nulla. Ex dolorum non ducimus error voluptatum similique iste. Eligendi.</p>
    </div>
        <img src={scabble} alt=''></img>
</div>
{data && <div className='row mw1240 mx-auto gap-2 py-5'>
    {data.map((datum)=>{
        return <div key={datum.id} className='col-md-5 col-lg-3 text-start mx-auto'> 
        <div className='position-relative'>
        <img className='w-100' src={forest}alt=''/> 
        <p style={{
          bottom: '0px',
          left: '10px',
        }} className='position-absolute bg-primary text-white px-3 rounded'>{datum.tags}</p>
          </div> 
            <div className='py-2'>
            <h3>{datum.title}</h3>
            <p>{datum.author.username} = {datum.created_at} </p>
            <p>{datum.story}</p>
            </div>
        </div>
    })}
    </div>}

    {<Loading loading={loading}/>}

{error && <p>{error}</p>}
    </RootLayout>
}

export default Feeds