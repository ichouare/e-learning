import React from 'react'

const Register = () => {
  return (
    <form className='w-full h-auto min-h-[310px]  grid grid-flow-row  grid-rows-[90px_90px_90px_60px]gap-4'>
    <div className=' py-2'>
      <label className='text-black first-letter:uppercase text-base font-normal  block mb-1' htmlFor='email'>Email Address</label>
      <input type='email' id="email" name="email" className='w-full bg-transparent border border-primary p-3 rounded-full text-sm text-gray-700' placeholder='enter your Email Address' />
    </div>
    <div className=' py-2'>
      <label htmlFor='useraname' className='text-black first-letter:uppercase text-base font-normal  block mb-1'>User name</label>
      <input id="username" name='username' type='text' className='w-full bg-transparent border border-primary p-3 rounded-full text-sm text-gray-700' placeholder='enter your user name' />
    </div>
    <div  className=' py-2'>
      <label htmlFor="password"className='text-black first-letter:uppercase text-base font-normal block mb-1'>password</label>
      <div>
      <input id="password"  name="password" type='pass' className='w-full bg-transparent border border-primary p-3 rounded-full text-sm text-gray-700 cursor-text'  placeholder='enter your password '/>
      <span></span>
      </div>
    </div>
    <div className='grid grid-flow-col grid-col-1  ' >
    <button type='submit' className='btn  translate-x-[70px] cursor-pointer'>Register</button>
    </div>
  </form>
  )
}

export default Register