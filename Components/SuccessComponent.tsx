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
    <section className='w-[100%]  min-h-[400px]  h-[500px]  flex flex-col items-center gap-y-8 '>
        <div className='grid h-[50%] grid-flow-row place-content-center gap-2'>
        <h1 className=' font-bold text-4xl w-full text-center'>Our Success</h1>
        <p className='max-w-[750px] text-center  leading-7'>
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. 
        </p>
        </div>

        <div className='w-full   grid grid-flow-col grid-cols-5 px-8 gap-x-2  '>
            {
            success.map( ({title, number, nature }) => {
                return ( <div key={title} className='grid place-content-center items-center'>
                <Counter value={number > 1000 ? number / 1000 : number} nature={nature}></Counter>
                <h3 className="text-slate-950/80 text-3xl font-normal font-['Buenos Aires Trial'] leading-10 text-center">{title}</h3>
           </div>)

            }
        )
    } 
        </div>
    </section>
  )
}

export default SuccessComponent