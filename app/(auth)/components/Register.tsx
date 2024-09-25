"use client"
import axios from 'axios';
import React , {FormEvent, useState} from 'react'
import { FaRegEye } from "react-icons/fa6";
import createUser from '@/lib/auth/RegiterActions';



type response = {
  message: string;
  status : number;
}

const Register =  ({setisRegistered}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string>('');;
  
  const handleSumbit : FormEventHandler = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()

        const form = e.currentTarget 
        const Form_Data = new FormData(form)
        const response  = await createUser(Form_Data)
        console.log(response)
        if(response.message)
          {
            setTimeout(() => {
              setError('')
              setisRegistered(true)
              form.reset()
            })
            
          

          }
        else{
          console.log("---------->", response.error)
          setError(response.error)
        }
      

    // }catch(error){
    //   console.error(error)
    // }
      // handle error here)

      // your form submission logic goes here
    }

    // your form submission logic goes here


  return (
    <form className='w-full h-auto min-h-[310px]   grid grid-flow-row  grid-rows-[90px_90px_90px_80px] gap-4' method='POST' onSubmit={handleSumbit} >
    <div className=' py-2'>
      <label className='text-black first-letter:uppercase text-base font-normal  block mb-2' htmlFor='email'>Email Address</label>
      <input  type='email' id="email" name="email" maxLength={100}  required className='w-full bg-transparent border border-primary p-3 rounded-full text-sm text-gray-700' placeholder='enter your Email Address'
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className=' py-2'>
      <label htmlFor='useraname' className='text-black first-letter:uppercase text-base font-normal  block mb-2'>User name</label>
      <input id="username" name='username' maxLength={40}   type='text' className='w-full bg-transparent border border-primary p-3 rounded-full text-sm text-gray-700' placeholder='enter your user name'
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
    </div>
    <div  className=' py-2'>
        <label htmlFor="password" className='text-black first-letter:uppercase text-base font-normal block mb-2'>password</label>
        <div className='flex items-center border border-primary px-4 rounded-full ' >
        <input id="password" name='password' maxLength={12}   type={showPassword ? 'password' : ''
         }className='w-full bg-transparent  outline-none py-4 text-sm text-gray-700 cursor-text'  placeholder='enter your password '
         value={password}
         onChange={(e) =>{ setPassword(e.target.value); setError('')}} 
         />
        <span className='relative cursor-pointer'   onClick={() => setShowPassword(prev => !prev)}>
        <span className={showPassword ? 'visible absolute w-[18px] h-[1px] bg-black block transition-all rotate-45 top-2 ' :'absolute w-[16px] h-[1px] bg-black block transition-all  rotate-0   invisible' }></span>
          <FaRegEye/></span>
        </div>
      </div>
      <div className='flex flex-col w-full h-full justify-end items-center gap-2    ' >
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    <button type='submit' className='btn  self-end  cursor-pointer'>Register</button>
    </div>
  </form>
  )
}

export default Register