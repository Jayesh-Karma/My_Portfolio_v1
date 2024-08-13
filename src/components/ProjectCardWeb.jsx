import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCardWeb = ({
  className = "",
  projectLink,
  projectLogo,
  projectName,
  projectDescription,
  button,
  projectImg,
}) => {
  return (


    <div
      className={` hover:bg-gray-600 hover:ease-in-out hover:transition-all group  rounded-13xl bg-basic-onyx box-border overflow-hidden flex flex-row items-center justify-between p-5 lg:p-3 gap-[0.25rem] max-w-full text-left text-[2rem] text-basic-white font-inter-16-regular border-[1px] border-solid border-darkslategray-100 min-w-full  ${className}`}
    >
      <div className="flex flex-col items-start justify-start p-2 box-border  max-w-full ">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <img
            className="w-[4.375rem] h-[4.375rem] relative overflow-hidden shrink-0 rounded-lg"
            loading="lazy"
            alt="Project Logo"
            src={projectLogo}
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <h1 className="m-0 self-stretch relative text-inherit font-extrabold font-inherit inline-block text-[2rem] lg:text-[1.5rem] ">
              {projectName}
            </h1>
            <div className="self-stretch relative text-[1rem] text-basic-dark-gray [display:-webkit-inline-box]  overflow-hidden text-ellipsis [-webkit-line-clamp:11] [-webkit-box-orient:vertical]">
              {projectDescription}
            </div>
           
           <div className="font-medium flex flex-row justify-between items-center gap-x-2">
           <a href={projectLink} target="_blank" className=" cursor-pointer no-underline flex flex-row justify-center gap-4">
              <span className="text-[1.125rem] font-bold no-underline text-white "> {button} </span>
              <img
                className="h-[1.5rem] w-[1.5rem]  overflow-hidden group-hover:animate-moveRight group-hover:delay-75 transition-all group-hover:ease-in-out"
                loading="lazy"
                alt=""
                src="/arrow-right.svg"
              />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className=" rounded-xl lg:hidden w-[28.563rem] p-5 relative max-h-full overflow-hidden shrink-0 object-cover max-w-full"
        loading="lazy"
        alt=""
        src={projectImg}
      />
    </div>
  );
};



export default ProjectCardWeb;
