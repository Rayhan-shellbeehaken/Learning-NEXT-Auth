"use client"
import React from 'react'
import { useAppContext } from '../store/store';

export default function PopUp() {
    const {popType, setEnabled} = useAppContext();
    const handleSubmit = (e) => {
        setEnabled(false)
    }

    return (
        <div className='absolute z-10 w-[40vw] top-[20%] left-[50%] translate-x-[-50%]'>
            <form className='bg-slate-600 flex flex-col p-2 rounded-md' onSubmit={handleSubmit}>
                <input placeholder='Title' type='text' className='w-[100%] my-2 rounded-md p-2'></input>
                <input placeholder='Description' type="text" className='w-[100%] my-2 rounded-md p-2'></input>
                <button className='text-lg w-[5vw] h-[5vh] bg-white rounded-md my-2' type="submit">{popType}</button>
            </form>
        </div>
    )
}
