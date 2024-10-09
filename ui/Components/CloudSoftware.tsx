import React from 'react'
import { SiGoogledocs } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";

type obj = {
    bg: string;
    icon: any;
    head: string;
    description: string;
}
const CloudSoftware = () => {
    
    const CloudData : obj[] = [
        {
        
            "bg" :  "bg-[#5B72EE]",
            "icon" : <SiGoogledocs className='text-[35px]' />,
            "head" : "Online Billing, Invoicing, & Contracts",
            "description" : "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"

        }, 
        {
            "bg" :  "bg-[#00CBB8]",
            "icon" : <FaCalendarAlt className='text-[35px]'/>,
            "head" : "Easy Scheduling & Attendance Tracking",
            "description" : "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"

        }, 
        {
            "bg" :  "bg-[#29B9E7]",
            "icon" : <MdGroups3  className='text-[35px]'/>,
            "head" : "Customer Tracking",
            "description" : "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "

        }, 
    ]
  return (
    <div className='w-full h-[700px]  flex flex-col items-center justify-around  gap-y-14  '>
        <div className='grid grid-flow-row place-content-center   gap-4'>
        <h2 className='font-bold text-4xl text-center w-full '>All-In-One  <span className='text-primary'>Cloud Software.</span></h2>
        <p className='max-w-[500px] text-center text-base  leading-7  font-normal text-[#696984]'>
        TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
        </p> 
    </div>
        <div className='w-full  grid grid-flow-col grid-cols-3 place-items-center    items-center justify-center '>
        {
                CloudData.map(({icon, bg, head, description, })=> {
                    return(
                        <article className='0 min-h-[350px] max-w-[400px] flex flex-col items-center gap-4 rounded-3xl shadow- border relative '>
                            <div className={bg + ' rounded-full h-20 w-20 text-white grid place-content-center -top-10 absolute '}>
                            {icon}
                            </div>
                            <div className='h-20 w-20'>

                            </div>
                            <div className='w-full h-full flex flex-col items-center gap-4  self-end'>
                                <h3 className='w-[80%] text-center px-3 text-[30px] font-medium text-[#2F327D]'>{head}</h3>
                                <p className='w-[90%] text-center px-6 leading-8 text-[20px] text-[#696984] font-light'>{description}</p>
                            </div>
                        </article>
                    )

                })
            
        }
       
        </div>

    </div>

  )
}

export default CloudSoftware