import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/FrameComponent'

const About = () => {
  return (
    <>
      <div className="w-full relative bg-dark-main-bg overflow-hidden flex flex-col items-center justify-center pt-[2rem] px-[0rem] pb-[0rem] box-border gap-[6.25rem] leading-[normal] tracking-[normal] mq750:gap-[3.125rem] mq450:gap-[1.563rem]">
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


        <div className=' w-full flex flex-col justify-center items-center'>
          <div className=' w-5/6 flex flex-col items-start justify-start font-inter-16-regular '>
            <div className=''>
              <h1 className=' font-inter-16-regular m-1 text-[3rem] lg:text-[2rem] text-white'> A little bit  about me.</h1>
              <p className='text-[#808080] m-1 lg:text-[14px] font-inter-24-regular'>WHO I AM AND WHAT I DO</p>
            </div>

            <div className='h-[3rem]' />
            <div className=" lg:ml-[-2rem] ml-[-8rem] w-[94.688rem] h-[0.063rem] flex justify-center items-center relative box-border max-w-[120%] shrink-0 z-[1] border-t-[1px] border-solid border-dark-white-10" />
      
            <div className=' w-full'>
              <div className=' w-5/6'>
                <div className=' text-[#808080] w-full mt-8'>
                  <p className=' text-[16px] mb-2'>WHO I AM</p>
                  <p className='m-0 text-[18px]' >Hi, I’m Jayesh Karma, a passionate software engineer with a focus on the MERN stack, Java, and Data Structures & Algorithms.🧑🏻‍💻</p>
                </div>
              </div>
            </div>


            <div className=' w-full'>
              <div className=' w-5/6'>
                <div className=' text-[#808080] w-full mt-8'>
                  <p className=' text-[16px] mb-2'>WHAT I DO</p>
                  <p className='m-0 text-[18px]' > Currently pursuing my B.Tech in Information Technology, I’ve dedicated myself to building dynamic and interactive web applications that solve real-world problems. My journey in web development has been fueled by a love for learning and innovation, constantly pushing me to explore new technologies and refine my skills. Whether it's crafting seamless user experiences or tackling complex algorithms, I thrive on challenges and am always eager to create solutions that make a difference. When I’m not coding, you can find me exploring the latest trends in tech, contributing to open-source projects, or working on my next big idea. My goal is to continue growing as a developer and to make a meaningful impact in the tech industry.</p>
                </div>
              </div>
            </div>

            <div className=' w-full'>
              <div className=' w-5/6'>
                <div className=' text-[#808080] w-full mt-8'>
                  <p className='m-0 text-[18px]' > 
                  Feel free to reach out via <a className='text-white' href="mailto:jayeshkarma06@gmail.com"> e-mail</a> ,or Connect with me on <a className=' text-white' href="https://www.linkedin.com/in/jayesh-karma-3a65b0229/">Linked In</a>.</p>
                </div>
              </div>
            </div>

            <div className=' w-full'>
              <div className=' w-5/6'>
                <div className=' text-[#808080] w-full mt-8'>
                  <p className='m-0 text-[18px]' > 
                    Let's build something great,
                  </p>
                  <div>
                    <img src="/Thankyou-removebg-preview.png" className='mt-5 w-[200px]' alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>



        <img
          className="w-full  absolute !m-[0] top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 z-[2]"
          alt=""
          src="/background-gradient1.svg"
        />

        <Footer />
      </div>
    </>
  )
}

export default About
