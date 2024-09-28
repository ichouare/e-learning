import React, {useEffect, useRef, useState} from 'react'
import { gsap } from "gsap";

const Counter = ({value, nature} : any) => {
    const [number, setNumber] = useState<Number>(0);
    const count = useRef<HTMLHeadingElement>(null);
    useEffect(() =>{
        const tl = gsap.timeline()
        let i : number = 0;
        // gsap.from(count.current, {yPercent : 200, duration : 3, stagger: 0.1})
        // gsap.to(count.current, {yPercent : 0, duration : 3, stagger: 0.1})
        tl.to({ value: 0 }, {
            value: 10, 
   
            onUpdate: function () {
                setInterval(() => {
                    if(count.current && i <= value)
                    {
                      if(nature)
                        count.current.textContent = (i).toString() + ' ' + nature ;
                      else
                        count.current.textContent = (i).toString() 
                        
                        i++;
                    }
                }, 2000 / value);
            }
          });
        
                
                
            
        // }
    }, [])
  return (
    <div>
      <p ref={count} className='w-full text-8xl text-center font-extrabold  bg-clip-text text-transparent bg-gradient-to-r to-lprimary  from-violet-500
      '>{value}</p>
  
    </div>
  )
}

export default Counter