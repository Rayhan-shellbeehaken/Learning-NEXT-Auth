"use client"
import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import PopUp from '../components/PopUp'
import { useAppContext } from '../store/store'

export default function Home() {
    const {enabled, setEnabled, setPopType} = useAppContext();

    const handleAdd = () => {
        setEnabled(true);
        setPopType("Add");
    }

    return (
        <div className='h-[100vh] w-[100vw] flex justify-center items-start py-[10vh] relative'>
            <div className='w-[60vw]'>
                {enabled && 
                    <PopUp/>
                } 
                <div className='text-right px-4 py-1'>
                    <button className='text-lg w-[5vw] h-[5vh] bg-slate-600 text-white rounded-md' onClick={handleAdd}>Add ToDo</button>
                </div>
                <div className='px-3'>
                    <TodoList/>
                </div>
            </div>
        </div>
    )
}
