"use client"
import Image  from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import {signIn, signOut } from 'next-auth/react';
import Navbar from "@/Components/Navbar";
import StartImg from '@/public/start.png'
import lovelygirl from '@/public/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1.png'
import Img from '@/public/img1.png'
import Img2 from '@/public/Assisted Student.png'
import Img3 from '@/public/Img3.png'
import SuccessComponent from "@/Components/SuccessComponent";
import CloudSoftware from "@/Components/CloudSoftware";



const Banner = () => {
  return (
    <section className="w-full h-[900px]  flex items-center justify-between  px-6 " >
        <div className="max-w-[681px] h-[404px] text-white  flex flex-col gap-12  ">
          <h1 className="font-bold text-[54px]">
         <strong className="text-[#F48C06]">
         Studying
          </strong> Online is now much easier
          </h1>
          <p className="text-[24px] font-light w-[80%] leading-normal">
          TOTC is an interesting platform that will teach you in more an interactive way
          </p>
          <div className="flex items-center  gap-x-8">
            <button className="btn w-[160px] h-[60px] p-3  bg-[#ffffff38]  text-white font-bold" onClick={() => {
              signIn()
            }}>
              join for free
            </button>
            <div className=" flex items-center justify-between w-[50%] h-full">
            <button className="h-16 w-16  bg-white rounded-full grid place-content-center cursor-pointer">
              <Image src={StartImg} alt="start" className="object-contain w-6 h-6 inline" />
            </button>
            <p className="text-[24px] text-black font-light leading-7">
            Watch how it works
            </p>
            </div>
          </div>
        </div>
        <div className="h-full p-0 relative   mt-4 ">
          <Image src={Img} alt="img" className="w-12 h-12 object-fill absolute top-48 right-20" />
          <Image src={Img2} alt="img" className=" object-fill absolute top-64 -left-36" />
          <Image src={Img3} alt="img" className=" object-fill absolute bottom-28 -left-44" />
          <Image src={lovelygirl} alt="lovely-teenage-girl" className="w-full h-full object-fill" />
        </div>
    </section>
  )
}

export default function Home() {
  const router = useRouter()

  useEffect( () => {
      try{
          const res =  axios.get("/api/home/", {withCredentials: true})
          console.log(res)
      }catch(err){
        console.log(err)
      }
  }, [])
  


  return (
    <main className="font-popping bg-white  h-screen flex flex-col items-center justify-start container lg:min-w-[1700px]  gap-y-8 ">
       <header className="w-full  h-auto  bg-lprimary  relative px-24   " >
          <Navbar />
          <Banner />
           {/* <div className="w-[2100px] h-[50px]   bg-red-500  absolute -left-44 rounded-full -bottom-10  ">
          </div> */}
      </header>
      <section className="w-full h-auto gapy-8">
        <SuccessComponent />
        <CloudSoftware />
      </section>
    </main>
  );
}
