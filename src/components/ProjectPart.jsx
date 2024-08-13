import { Link } from "react-router-dom";
import ProjectCardWeb from "./ProjectCardWeb";
import "./ProjectPart.css"
import { projectData } from "../data/dataFile";

const ProjectPart = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[3rem] text-basic-white font-inter-16-regular ${className}`}
    >
      <div className="w-[64rem] flex flex-col items-start justify-start gap-[1.75rem] max-w-full">
        <div className="w-[39.5rem] flex flex-col items-start justify-start gap-[0.25rem] max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.813rem] mq1050:text-[2.375rem]">
            Projects
          </h1>
          
          <div className="self-stretch h-[0rem] flex flex-row items-start justify-end max-w-full">
            <div className="h-[0rem] w-[30.75rem] relative max-w-full" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-[2rem] mq750:gap-[1rem]">


          {
            projectData.slice(0,2).map((item, idx) => (
              <ProjectCardWeb  key={idx}
                  projectLink={item.projectLink}
                  projectLogo={item.projectLogo}
                  projectName={item.projectName}
                  projectDescription={item.projectDescription.slice(0,100) + "...."}
                  button={item.button}
                  projectImg={item.projectImg}
                  className={item.className}
              />
            ))
          }

        </div>

        <div className=" hover:shadow-lg hover:shadow-gray-600 transition-all hover:bg-gray-300 w-full p-5 rounded-lg group" style={{border: "1px solid gray"}}>
          <div className='container '>

            <Link to={"/projects"} className='animated-arrow' href=''>
              <span className='the-arrow -left'>
                <span className='shaft'></span>
              </span>
              <span className='main'>
                <span className=' text-3xl lg:text-xl'>
                  Discover More Projects
                </span>
                <span className='the-arrow -right'>
                  <span className='shaft'></span>
                </span>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};



export default ProjectPart;
