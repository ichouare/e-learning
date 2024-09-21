"use client"
import React, {useState} from 'react'
import RegisterForm from '../components/Register'
import LoginForm from '../components/Login'
import ImgLoginComponent from '../components/ImgLoginComponent'
// import Register from './components/Register'




const Login = () => {
    const [isRegistered, setisRegistered] = useState(false)
  return (
    <section className="w-full min-h-screen  flex  items-center justify-evenly ">
        <ImgLoginComponent isRegistered={isRegistered}/>
       <div className='max-w-[315px] md:max-w-[454px]    w-full h-full min-h-[700px] max-h-[750px]  flex flex-col items-center gap-8 py-10 px-6 md:px-2'>
        <h1 className='w-full  text-base text-normal text-center font-normal'>welcome to UdMr !</h1>
        <div className='relative bg-lprimary w-full max-w-[329px] min-h-14 h-14 rounded-full p-2 flex justify-between items-center opacity-60'> 
            <button className='h-full min-w-28 w-[50%] text-center rounded-full text-white capitalize   text-base font-medium opacity-100 cursor-pointer  ' onClick={() => setisRegistered(false)}>
                login
            </button>
            <button className='h-full min-w-28 w-[50%] text-center rounded-full text-white capitalize  text-base font-medium cursor-pointer' onClick={() => setisRegistered(true)}>
                register
            </button>
            <span className={isRegistered ? 'block transtion bg-red-500 opacity-100 h-10 min-w-28  w-[50%] absolute -z-10 border  border-[#000000]  rounded-full right-2 ': " block transtion bg-red-500  w-[50%] h-10 border-[#000000] min-w-28 absolute -z-10 border rounded-full"}></span>
        </div>
        <p className='text-base font-light text-textColor   '>
        Access Your UdMr Dashboard: Sign In to Explore Your Courses and Progress.
        </p>
        {!isRegistered ? <LoginForm/>: <RegisterForm/> }
    </div>
    </section>
  )
}

export default Login