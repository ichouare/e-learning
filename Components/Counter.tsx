import React, {useEffect, useRef, useState} from 'react'
import { gsap } from "gsap";

const Counter = ({value} : any) => {
    const [number, setNumber] = useState<Number>(0);
    const count = useRef<HTMLHeadingElement>(null);
    useEffect(() =>{
        let i : number = 0;
        gsap.to({ value: 0 }, {
            value: 10, 
            duration: 5,
            onUpdate: function () {
                setInterval(() => {
                    if(count.current && i <= value)
                    {
                        count.current.textContent = (i).toString();
                        
                        i++;
                    }
                }, 1000);
            }
          });
        
                
                
            
        // }
    }, [])
  return (
    <div ref={count}></div>
  )
}

export default Counter