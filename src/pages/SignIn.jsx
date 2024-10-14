import React, { useState } from 'react';
import back from '../assets/back.png';
import line from '../assets/line.png';
import cup from '../assets/cup.png';
import night from '../assets/night.png'
import sun from '../assets/sun.png'

function SignIn() {
  const [active,setActive]=useState(false)
  const onClickHandle=()=>{
    if(active==false){
      setActive(true)
    }
    else setActive(false)
  }
  return (
    <>
      <div
        className="w-[100vw] h-[100vh] flex"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='w-[40vw] h-[100vh] p-5 '>
         
          <div className='w-[6rem] relative h-[2rem] bg-[#D9D9D9] bg-opacity-40  rounded-full 'onClick={onClickHandle}>
            <div className={`w-[3rem] py-1 px-3 absolute left-0 top-0 bg-opacity-30  h-full   rounded-full transition-transform duration-300 ${active?'bg-white bg-opacity-50':'bg-[#D9D9D9]'} ease-in-out ${active?'translate-x-[3rem]':''}`}>
               <img className='w-[1.5rem] ' src={active?sun:night} alt="" />
            </div>
          </div>
          
          



        </div>





        <div className='w-[60vw] h-[100vh] p-5 '>
          <div className='flex w-[57vw] justify-end items-center'>
            <img className='w-[6rem]' src={line} alt="" />
          </div>

          <div className='h-[30vh]'></div>

          <div className='w-[58vw] flex-col px-[10rem] items-center font-alegreya-sans-sc text-lg'>
            <div className='flex gap-6'>
              <img className="w-[4rem]" src={cup} alt="" />
              <h1 className='font-bold text-white text-7xl'>Welcome ! !</h1>
            </div>
            <div className='flex my-10 justify-between'>
              <h1 className='text-white text-2xl'>Don't have an account?</h1>
              <span className='relative group'>
                <h1 className='text-white text-2xl cursor-pointer'>sign in</h1>
                <span className='absolute left-0 bottom-0 h-1 w-full bg-white transition-all duration-300 ease-in-out transform scale-x-100 group-hover:scale-x-50' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
