"use client"
import React , {useState} from 'react'
import { FaRegEye } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <form className='w-full h-auto  min-h-[300px]  grid grid-flow-row  grid-rows-[120px_100px_50px_50px] gap-4' >
      <div className=' py-2'>
        <label htmlFor='username' className='text-black first-letter:uppercase text-base font-normal  block mb-2'>User name</label>
        <input id="username" name="username" type='text' className='w-full bg-transparent border border-primary p-4 rounded-full text-sm text-gray-700' placeholder='enter your user name' />
      </div>
      <div  className=' py-2 '>
        <label htmlFor="password" className='text-black first-letter:uppercase text-base font-normal block mb-2'>password</label>
        <div className='flex items-center border border-primary px-4   rounded-full '>
        <input id="password" name='password' type={showPassword ? 'password' : ''
         }className='w-full bg-transparent  outline-none py-4 text-sm text-gray-700 cursor-text'  placeholder='enter your password '/>
        <span className='relative  cursor-pointer'  onClick={() => setShowPassword(prev => !prev)}>
          <span className={showPassword ? 'visible absolute w-[18px] h-[1px] bg-black block transition-all rotate-45 top-2 ' :'absolute w-[16px] h-[1px] bg-black block transition-all  rotate-0   invisible' }></span>
          <FaRegEye/></span>
        </div>
      </div>
      <div className='text-xs text-normal flex items-start justify-between capitalize md:px-6'>
        <div  className='flex items-center gap-1'>
       <input type='checkbox'  className='w-2.5 h-3  cursor-text'/>
       <label>remember me</label>
        </div>
        <p>
          forget password ??
        </p>
      </div>
      <div className='flex flex-col w-full h-full ' >

      <button type='submit' className='btn   self-end  cursor-pointer'>login</button>
      </div>
    </form>
  )
}

export default Login