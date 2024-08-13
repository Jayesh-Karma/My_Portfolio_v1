import React from 'react'
import ProjectCardWeb from '../components/ProjectCardWeb'
import NavBar from '../components/NavBar'
import Footer from '../components/FrameComponent'
import TechstackCards from '../components/TechstackCards'
import { projectData } from '../data/dataFile'



const ProjectSection = () => {
  return (
    <>
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

    <div className=' my-[-4rem] lg:my-[0.1rem] w-5/6 m-0 text-left' id='projects'>
      <h1 className=' font-inter-16-regular text-[3rem] lg:text-[2rem] text-white'>Projects 💻</h1>
      
      <div className=" w-[94.688rem] h-[0.063rem] ml-[-8rem] lg:ml-[-2rem] flex justify-center items-center relative box-border max-w-[120%] shrink-0 z-[1] border-t-[1px] border-solid border-dark-white-10" />
      
    </div>

    <div className=' flex flex-row justify-center items-center w-full'>
        <div className=" w-5/6 self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-[2rem] mq750:gap-[1rem]">
        {
          projectData.map((item, idx)=> ( 
            <ProjectCardWeb key={idx}
              projectLink={item.projectLink}
              projectLogo={item.projectLogo}
              projectName={item.projectName}
              projectDescription={item.projectDescription}
              button={item.button}
              projectImg={item.projectImg}
              className={item.className}

           />))
        }

        <h4 className=' text-[#808080]'>More Exciting Projects on the Way...!🚀</h4>
        </div>
    </div>



    <img
        className="w-full  absolute !m-[0] top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/background-gradient1.svg"
      />

      <Footer/>
    </div>
    </>
  )
}

export default ProjectSection
