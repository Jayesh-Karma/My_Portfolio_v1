import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ className = "" }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["About", "Work", "Notebook", "Contact"].map((text) => (
          <ListItem  key={text} >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
   
        <div className="w-full flex flex-col justify-between text-basic-dark-gray text-3xl lg:text-5xl">
          <div className=" flex flex-col justify-between">
          
          <div className="w-full flex lg:flex-col-reverse flex-row justify-between items-center">

            
            <div className="">
              <h1 className=" font-extrabold font-sans lg:text-[1.5rem]">
                Hii, I’m <br /> <span className=" text-center text-[3rem] lg:text-[2rem] text-basic-white">Jayesh Karma 👋</span>
              </h1>
              <h3 className="text-lg lg:text-[18px] leading-relaxed font-medium">
                <span>
                  
                A passionate and dedicated MERN stack developer with a solid background in Java and Data Structures & Algorithms (DSA).   
                </span>
                
                <span>
                As a B.Tech Information Technology student, I am committed to building dynamic applications that solve real-world problems.🌐
                </span>
                <br />
                <span>Consistently striving for excellence. ⏩📈</span>
              </h3>
            </div>

            <div className=" w-[100%] flex justify-center overflow-hidden">
              <img src="/profile-pic-removebg-preview (1).png" className=" w-[90%]" alt="rounded-full" />
            </div>

          </div>
           

          <div>
            <div className="flex flex-row lg:flex-col items-start justify-start gap-4">
              <Button
                className=" hover:shadow-gray-600 hover:shadow-md min-w-[7.938rem] text-basic-light-gray hover:text-white "
                variant="contained"
                style={{
                  textTransform: "none",
                  background:"#181818",
                  fontSize: "18px",
                  borderRadius: "9px",
                  height: 60,
                }}
                href="https://drive.google.com/file/d/1M6WKWjS5FCnivR6p5PLHMpvx-oOGFpF4/view?usp=sharing"
                target="_blank"
              >
                See my resume
              </Button>
              <Button
                className=" hover:shadow-gray-600 hover:shadow-md min-w-[10.563rem] text-basic-light-gray hover:text-white"
                variant="contained"
                style={{
                  textTransform: "none",
                  fontSize: "18px",
                  background: "#181818",
                  borderRadius: "9px",
                  height: 60,
                }}
                href="mailto:jayeshkarma06@gmail.com"
              >
                Get in touch
              </Button>
        </div>

           </div>
         
          </div>
        </div>
      
  );
};



export default HeroSection;
