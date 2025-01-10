"use client"
import Link from 'next/link'
import React, { useState } from 'react'
export default function SignIn() {

  const [user, setUser] = useState({
    email : "",
    password : ""
  })

  const handleChange = (prop, value) => {
    setUser((prev) => ({
        ...prev,
        [prop] : value
    }))
  }

  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw]'>
      <div className='bg-red-300 w-[25%] px-2 py-2 flex flex-col items-center rounded-md'>
        <h2 className='font-bold text-3xl'>Sign-In form</h2>
        <form className='flex flex-col justify-center items-center w-[100%] mt-7'>
          <input placeholder='E-mail' value={user.email} onChange={(e) => handleChange("email",e.target.value)} type='e-mail' className='w-[100%] my-2 rounded-md p-2'></input>
          <input placeholder='Pasword' value={user.password} onChange={(e) => handleChange("password", e.target.value)} type='password' className='w-[100%] my-2 rounded-md p-2'></input>
          <button type='submit' className='text-lg p-3 bg-slate-600 text-white rounded-md my-2'>Sign In</button>
        </form>
        <h3 className='my-3'>Don't have an account ? <Link href="/signup" className='text-lg p-3 mx-2 bg-slate-100 rounded-md'>Sign up</Link></h3>
      </div>
    </div>
  )
}
