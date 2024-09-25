"use client"
import Image  from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { useSession, signIn, signOut } from 'next-auth/react';
import LogoutAction from "@/lib/auth/LogoutAction";

export default function Home() {
  const router = useRouter()
  
    const handleLogin = async () => {
      // You can call signIn programmatically
      signIn();
    };
    const handlelogout =  () => {
      // You can call signIn programmatically
      signOut();
    };


  useEffect( () => {
      try{
          const res =  axios.get("/api/home/", {withCredentials: true})
          console.log(res)
      }catch(err){
        console.log(err)
      }
  }, [])
  


  return (
    <main className="font-popping  w-full h-screen flex items-center justify-center  ">
      <button onClick={handleLogin} className="btn bg-blue-500 rounded-none cursor-pointer" >
        Login
      </button>
      <button onClick={handlelogout}
       className="btn bg-blue-500 rounded-none cursor-pointer" >
        logout
      </button>
    </main>
  );
}
