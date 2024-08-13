import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./ProjectCardWeb.css";

const TechstackCards = ({ name, desc, img }) => {
  return (
    <div
    className="lg:w-full bg-[#181818] flex flex-col lg:flex-row lg:p-2 items-center justify-center p-3 rounded-xl shadow-md"
    style={{border:"0.3px solid #383737", }} 
    >
        <div className=" lg:p-3 p-16">
            <img src={img} alt={name} className="w-20 h-20 rounded-2xl " />
        </div>
        <div className=" w-full flex flex-row justify-between items-end">
            <b className=" font-inter-16-regular">{name}</b>
            <div style={{border:"0.1px solid #272525"}} className=" text-[#808080] text-[14px] py-1 px-2 rounded-xl"
            >{desc}</div>
        </div>
    </div>
  );
};



export default TechstackCards;
