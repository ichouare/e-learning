import React from 'react'
import loginIMG from '@/public/LoginIMG.png'
import regiterIMG from '@/public/RegiterIMG.png'
import Image from 'next/image'

interface props {
    isRegistered: boolean;
  }

const ImgLoginComponent = ({isRegistered} : props) => {

  return (
    <div className='w-[50%] max-w-[737px] max-h-[825px] hidden lg:block'>
        <Image  src={isRegistered ? regiterIMG  : loginIMG } alt='login_img' width={400} height={400}  placeholder="blur"  className='w-full h-full object-fill'/>
    </div>
  )
}

export default ImgLoginComponent