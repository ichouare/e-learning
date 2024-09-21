"use client"
import React, {useState} from 'react'
import RegisterForm from '../components/Register'
import LoginForm from '../components/Login.tsx'
// import Register from './components/Register'

const Login = () => {
    const [isRegistered, setisRegistered] = useState(false)
  return (
    <section className='w-full h-full  flex flex-col items-center gap-4 py-20 px-4'>
        <h1 className='w-full  text-base text-normal text-center'>welcome to UdMr !</h1>
        <div className='relative bg-lprimary w-full h-12 rounded-full p-2 flex justify-between items-center opacity-60'> 
            <button className='h-full min-w-28 text-center rounded-full text-white capitalize  text-base font-medium opacity-100 cursor-pointer ' onClick={() => setisRegistered(false)}>
                login
            </button>
            <button className='h-full min-w-28 text-center rounded-full text-white capitalize  text-base font-medium cursor-pointer' onClick={() => setisRegistered(true)}>
                register
            </button>
            <span className={isRegistered ? 'block transtion bg-primary opacity-100 h-10 min-w-28 absolute -z-10 border  border-[#000000]  rounded-full right-2 ': " block transtion bg-primary h-10 border-[#000000] min-w-28 absolute -z-10 border rounded-full"}></span>
        </div>
        <p className='text-base font-normal text-textColor  '>
        Access Your UdMr Dashboard: Sign In to Explore Your Courses and Progress.
        </p>
        {!isRegistered ? <LoginForm/>: <RegisterForm/> }
    </section>
  )
}

export default Login