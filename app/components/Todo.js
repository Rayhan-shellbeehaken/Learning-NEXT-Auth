"use-client"
import React from 'react'
import { useAppContext } from '../store/store'

export default function Todo() {
  const {setPopType, setEnabled} = useAppContext();

  const handleEdit = () =>{
    setEnabled(true);
    setPopType("Update");
  }

  return (
    <div className='flex justify-between bg-slate-300 mb-2 py-1 px-3 rounded-lg'>
        <div className=''>
            <h2 className='text-3xl'>Title</h2>
            <p className='text-lg mt-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>
        <div className='text-right'>
            <button className='text-lg w-[5vw] h-[5vh] bg-white rounded-md my-2' onClick={handleEdit}>Edit</button>
            <button className='text-lg w-[5vw] h-[5vh] bg-red-300 rounded-md my-2'>Delete</button>
        </div>
    </div>
  )
}
