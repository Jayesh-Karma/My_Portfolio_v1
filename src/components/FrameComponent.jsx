import { Link } from "react-router-dom";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-center justify-center p-5 box-border gap-[1.937rem] max-w-full text-left text-[0.875rem] text-basic-medium-gray font-inter-16-regular lg:pl-[7.563rem] lg:box-border mq750:gap-[0.938rem] mq750:pl-[3.75rem] mq750:box-border mq450:pl-[1.25rem] mq450:box-border ${className}`}
    >
      <div className=" w-[94.688rem] h-[0.063rem] flex justify-center items-center relative box-border max-w-[120%] shrink-0 z-[1] border-t-[1px] border-solid border-dark-white-10" />
      <div className="w-[65.25rem] overflow-hidden flex flex-row items-start justify-between py-[2.625rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.25rem] max-w-full z-[1] mq750:flex-wrap">
        
        
        <div className=" flex flex-col items-start justify-start gap-[5.812rem] mq450:gap-[2.875rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
            <img
              className="w-[7.75rem] flex-1 relative max-h-full"
              loading="lazy"
              alt=""
              src="/jayeshLogo2.png"
            />
            <div className="relative leading-[1.5rem] font-medium">
              <span>{`Thanks for stopping by `}</span>
              <span className="text-[1.25rem]">ッ</span>
               <div className="">
                 © 2024 Jayesh Karma. All Rights Reserved.
               </div>
            </div>
          </div>
        </div>
        <div className="w-[17.875rem] flex flex-row items-start justify-start gap-[7.5rem] text-[1rem] text-basic-white mq450:gap-[3.75rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2rem]">
            <b className="relative inline-block min-w-[2.625rem]">Links</b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-basic-light-gray">
              <div className="overflow-hidden flex flex-row items-center justify-center gap-[0.5rem]">
                <Link to={"/about"} className=" cursor-pointer [text-decoration:none] relative text-[inherit] inline-block min-w-[2.875rem]">
                  About
                </Link>
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/chevron-right.svg"
                />
              </div>
              <div className="relative inline-block min-w-[2.438rem]"> 
              <Link to={"/projects"} className="[text-decoration:none] relative text-[inherit] inline-block min-w-[2.875rem]">
                  Projects
                </Link>
              </div>
              <Link to={"/techstack"} className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.25rem]">
                Tech Stack
              </Link>
             
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <b className="relative inline-block min-w-[5.125rem]">Elsewhere</b>
            <div className="  flex flex-col items-start justify-start gap-[1rem] text-basic-light-gray">
              <a href="mailTo:jayeshkarma06@gmail.com"  className=" hover:text-white hover:scale-110 transition-all  [text-decoration:none] text-[inherit] relative inline-block min-w-[2.563rem]">
                Email
              </a>
              <a href="https://www.linkedin.com/in/jayesh-karma-3a65b0229/" target="_blank" className=" hover:text-white hover:scale-110 transition-all [text-decoration:none] text-[inherit]"> Linkedin</a>

              <a href="https://github.com/Jayesh-Karma" target="_blank" className="hover:text-white hover:scale-110 transition-all [text-decoration:none] text-[inherit]">GitHub</a>
              
            </div>
          </div>
        </div>
        <div className="h-[1.188rem] w-[11.313rem] hidden" />
      </div>
    </footer>
  );
};



export default Footer;
