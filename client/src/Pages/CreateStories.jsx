import React, { useContext, useState } from 'react'
import RootLayout from '../layout/RootLayout'
import editIcon from '../Asset/Images/Vector (4).jpg'
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CreateStories=()=> {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [story, setStory] = useState("");

    const {token}= useContext(AuthContext)
    const navigate = useNavigate();

    const createNewStory = async (newStory)=>{
        const res = await fetch('http://127.0.0.1:8000/api/stories/create/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body : JSON.stringify(newStory),
        });

        const data = res.json()

        if (res.status=== 201){
            toast.success("Story Created Successfully!");
            navigate('/my-stories');

        }
        if (res.status === 400){
            toast.error('Something Went Wrong! check the Field!')
        }

    }
  return (
    <RootLayout>
        
        <form action='' className='mw1240 mx-auto text-start py-4 d-flex flex-column gap-3'
        onSubmit={(e)=>{
            e.preventDefault();
            const formData={
                title,
                tags,
                story,
            }
            createNewStory(formData);
        }}>
        <h1>Create Story</h1>
            <div className='position-relative'>
                <img className='position-absolute bg-white px-2' src={editIcon} alt='' />
                <input className='w-100 px-3 py-2 fw-semibold border rounded-1'
                 type='text' 
                 placeholder='Title' 
                 onChange={(e)=>{
                    setTitle(e.target.value);
                 }}
                
                />
            </div>
            <div className='position-relative'>
                <img className='position-absolute bg-white px-2' src={editIcon} alt='' />
                <input className='w-100 px-3 py-2 fw-semibold border rounded-1' 
                type='text' 
                placeholder='Tags'
                onChange={(e)=>{
                    setTags(e.target.value);
                 }}
                
                />

            </div>
                <img className='position-absolute bg-white px-2' src={editIcon} alt='' />
            <div>
                <textarea 
                className='w-100 px-3 py-2 fw-semibold border rounded-1'
                name=''
                id=''
                cols="30"
                rows='10'
                placeholder='Write your Story...'
                onChange={(e)=>{
                    setStory(e.target.value);
                 }}
                ></textarea>
            </div>
            <button className='btn bg-blue w-50 text-white mx-auto'>Published Story</button>
        </form>
    </RootLayout>
  )
}

export default CreateStories