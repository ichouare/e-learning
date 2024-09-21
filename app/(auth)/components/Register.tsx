"use client"
import React , {FormEvent, useState} from 'react'
import { FaRegEye } from "react-icons/fa6";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleSumbit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // your form submission logic goes here
  }

  return (
    <form className='w-full h-auto min-h-[310px]   grid grid-flow-row  grid-rows-[90px_90px_90px_80px] gap-4' method='POST'  onSubmit={handleSumbit}>
    <div className=' py-2'>
      <label className='text-black first-letter:uppercase text-base font-normal  block mb-2' htmlFor='email'>Email Address</label>
      <input type='email' id="email" name="email" maxLength={100}  required className='w-full bg-transparent border border-primary p-3 rounded-full text-sm text-gray-700' placeholder='enter your Email Address' />
    </div>
    <div className=' py-2'>
      <label htmlFor='useraname' className='text-black first-letter:uppercase text-base font-normal  block mb-2'>User name</label>
      <input id="username" name='username' maxLength={40}  required type='text' className='w-full bg-transparent border border-primary p-3 rounded-full text-sm text-gray-700' placeholder='enter your user name' />
    </div>
    <div  className=' py-2'>
        <label htmlFor="password" className='text-black first-letter:uppercase text-base font-normal block mb-2'>password</label>
        <div className='flex items-center border border-primary px-4 rounded-full ' >
        <input id="password" name='password' maxLength={12}  required type={showPassword ? 'password' : ''
         }className='w-full bg-transparent  outline-none py-4 text-sm text-gray-700 cursor-text'  placeholder='enter your password '/>
        <span className='relative cursor-pointer'   onClick={() => setShowPassword(prev => !prev)}>
        <span className={showPassword ? 'visible absolute w-[18px] h-[1px] bg-black block transition-all rotate-45 top-2 ' :'absolute w-[16px] h-[1px] bg-black block transition-all  rotate-0   invisible' }></span>
          <FaRegEye/></span>
        </div>
      </div>
      <div className='flex flex-col w-full h-full justify-end  ' >
    <button type='submit' className='btn  self-end  cursor-pointer'>Register</button>
    </div>
  </form>
  )
}

export default Register