import React from 'react'
import { useState } from 'react'
import {FadeLoader} from 'react-spinners'

const Loading =({loading}) =>{
    // const [loading, setLoading] = useState (true);
    const [color, setColor] = useState ("#0086B0");

    const override ={
        display: "block",
        margin: "0 auto",
        borderColor: "red"
    }
  return (
    <div className='py-5'>
        <FadeLoader
        color={color}
        Loading ={loading}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
        />
    </div>
  )
}

export default Loading