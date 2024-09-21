import React from 'react'

const Login = () => {
  return (
    <form className='w-full h-auto min-h-[300px]  grid grid-flow-row  grid-rows-[120px_100px_50px_50px]'>
      <div className=' py-2'>
        <label htmlFor='username' className='text-black first-letter:uppercase text-base font-normal  block mb-1'>User name</label>
        <input id="username" name="username" type='text' className='w-full bg-transparent border border-primary p-4 rounded-full text-sm text-gray-700' placeholder='enter your user name' />
      </div>
      <div  className=' py-2'>
        <label htmlFor="password" className='text-black first-letter:uppercase text-base font-normal block mb-1'>password</label>
        <div>
        <input id="password" name='password' type='pass' className='w-full bg-transparent border border-primary p-4 rounded-full text-sm text-gray-700'  placeholder='enter your password cursor-text'/>
        <span></span>
        </div>
      </div>
      <div className='text-xs text-normal flex items-start justify-between capitalize '>
        <div  className='flex items-center gap-1'>
       <input type='checkbox'  className='w-2.5 h-3  cursor-text'/>
       <label>remember me</label>
        </div>
        <p>
          forget password ??
        </p>
      </div>
      <div className='grid grid-flow-col grid-col-1  ' >

      <button type='submit' className='btn  translate-x-[70px] cursor-pointer'>login</button>
      </div>
    </form>
  )
}

export default Login