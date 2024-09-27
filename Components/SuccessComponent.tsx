import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";
import Counter from './Counter';

const SuccessComponent = () => {
    const success = [
        {
            title: 'students',
            number: 15000,
            nature : 'K'
        },
        {
            title: 'total sucess',
            number: 75,
            nature : '%',
        },
        {
            title: 'main questions',
            number: 35,
        },
        {
            title: 'chief experts',
            number: 26,
        },
        {
            title: 'years of experience',
            number: 16,
        }
    ]
    let counter = {
        value : 0,
    }
    const count = useRef<HTMLHeadingElement>(null);
    useEffect(()=> {
        gsap.to({ value: 0 }, {
            value: 10, 
            // duration: 2,
            onUpdate: function () {
                console.log(counter.value);
              if (count.current) {
                console.log(count.current.textContent)
                count.current.textContent = Math.floor(counter.value).toString();
              }
            }
          });
    }, [])
  return (
    <section className='w-[100%]  min-h-[300px]   flex flex-col items-center justify-center gap-4'>
        <h1 className=' font-bold text-xl'>Our Success</h1>
        <p className='max-w-[750px] text-center  leading-7'>
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. 
        </p>
        <div>
            <div>
                 <h3 className=''>students</h3>
                 <Counter value={10}></Counter>
            </div>
        </div>
    </section>
  )
}

export default SuccessComponent