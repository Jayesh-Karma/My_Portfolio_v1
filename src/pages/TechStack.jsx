import React from 'react'
import TechstackCards from '../components/TechstackCards'
import NavBar from '../components/NavBar'
import Footer from '../components/FrameComponent'
import { RiArrowDropRightLine } from "react-icons/ri";

import { FrontendSkills } from '../data/dataFile';





const TechStack = ({className}) => {
  return (
    <div>

    <div id='projectSection' className="w-full relative bg-dark-main-bg overflow-hidden flex flex-col items-center justify-center pt-[2rem] px-[0rem] pb-[0rem] box-border gap-[6.25rem] leading-[normal] tracking-[normal] mq750:gap-[3.125rem] mq450:gap-[1.563rem]">
      <img
        className="w-full  absolute right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/background-gradient.svg"
      />
    <section className={`flex flex-col w-11/12 items-center justify-center p-4 box-border max-w-full text-left text-basic-light-gray font-inter `}>
      <div className="w-full max-w-screen-xl flex flex-col items-start justify-start gap-12">
        <NavBar />   
      </div>
    </section>


       <section id='techstack'
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[0.875rem] pr-[1.375rem] pl-[1.25rem] box-border max-w-full text-left  text-basic-white font-inter-16-regular ${className}`}
    >
      <div className="w-[64rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
        
        
        <div className=' flex justify-between items-center gap-x-5 lg:gap-x-2'>

        <h1 className="  text-[3rem] m-0 relative font-inter-16-regular font-bold font-inherit inline-block max-w-full mq450:text-[1.813rem] mq1050:text-[2.375rem]">
          Tech Stack
        </h1>
        <img src="/techstackLogos/icons8-tech-stack-32.png" alt="" className='h-[50px] lg:h-[35px]' />
        </div>
        <div className=' text-[#808080] font-mono text-[1.5rem] mt-[-2rem]  lg:mt-[-0.5rem] ml-2 flex justify-center '>Skills <span className=' text-[2rem]'><RiArrowDropRightLine /></span></div>
        
       <div className=' flex flex-wrap gap-3'>
          {FrontendSkills.map((det, idx) => (
            <TechstackCards name={det.name} desc={det.desc} img={det.img} key={idx} />
          ))}
        </div>

        
      </div>
    </section>
    <img
        className="w-full  absolute !m-[0] top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/background-gradient1.svg"
      />

      <Footer/>
    </div>
    </div>
  )
}

export default TechStack
