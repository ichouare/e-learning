import React from 'react'
import polygonne from '@/public/Polygon.png'
import TOTC from '@/public/TOTC.png'
import Image from 'next/image'
import Link from 'next/link'
import {signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const navbarLink = [{
    label: 'Home',
    href: '/',
  } ,
  {
    "label": 'courses',
    href: '/courses',
  },
  {
    "label": 'careers',
    href: '/careers',
  },
  {
    "label": 'blog',
    href: '/blog',

  },
  {
    "label": 'about us',
    href: '/about',
  }
]

const handleLogin = async () => {
  // You can call signIn programmatically
  signIn();
};

  return (
    <nav className='px-6  h-20 flex items-center justify-center py-3  '>
      <div className='w-full   h-20 min-h-[83px] relative flex items-center '>
        <Image src={polygonne} alt='polygonne' className='h-14 w-14 ' />
        <Image src={TOTC} alt='TOTC'  className='absolute h-4 w-14 ms-3'/>
      </div>
      <div className='grow  flex  items-center'>

      <ul className='w-[721px] h-full flex capitalize text-base font-normal   items-center justify-evenly' >
        {
          navbarLink.map(link => {
            return (
              <li key={link.label} className='cursor-pointer'>
                <Link href={link.href} className='text-white font-normal text-lg '>{link.label}</Link>
              </li>
            )
          })
        }
      </ul>
      <div>
        <button  className='btn !bg-white !text-black font-medium w-[120px]' onClick={handleLogin}>
          Login
        </button>
      </div>
        </div>
    </nav>
  )
}

export default Navbar