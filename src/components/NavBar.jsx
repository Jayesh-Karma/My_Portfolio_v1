import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({className}) => {
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
        className=' bg-basic-onyx h-full'
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {["About", "Projects", "Techstack"].map((text) => (
            <ListItem  key={text}  >
              <Link to={"/"+text.toLowerCase()} className=' no-underline text-white hover:scale-110 w-full' style={{borderBottom:"1px solid black", padding:"15px", }}>{text}</Link>
            </ListItem>
          ))}
        </List>
      </div>
    );
  return (
    <>

      <div className="w-full max-w-screen-xl flex flex-col items-start justify-start gap-12">
        
       
       <header className="w-full lg:h-14 bg-gray-600 backdrop-filter backdrop-blur-md rounded-xl flex flex-row items-center justify-between py-4 px-4 box-border sticky top-0 z-50 gap-5">
            <a href='/'>
            <img
              className="h-8"
              loading="lazy"
              alt=""
              src="/Logo/Jayesh__1_-removebg-preview.png"
            />
            </a>
          <div className="flex flex-row items-center justify-between gap-5">
            <nav className="flex lg:hidden   flex-row items-center gap-5 ">
              <Link to={"/about"} className="text-base font-medium no-underline text-slate-300 hover:text-white hover:scale-110" href="#about">
                About
              </Link>
              <Link to={"/projects/#projects"} className="text-base font-medium no-underline text-slate-300 hover:text-white hover:scale-110" href="#work">
                Projects
              </Link>
              <Link to={"/techstack"} className=" transition-all text-base font-medium no-underline text-slate-300 hover:text-white hover:scale-110" href="#techstack">
                Techstack
              </Link>
            
            </nav>
            <span className="lg:hidden flex">|</span>
          <div className="flex flex-row items-center flex-end gap-5 opacity-70">
            <Link
              to={"https://github.com/Jayesh-Karma"}
              target="__blank"
            >
            <img
              className="h-6 w-6 hover:scale-110"
              loading="lazy"
              alt=""
              src="/tools--github@2x.png"
            />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/jayesh-karma-3a65b0229/"}
              target="__blank"
            >
            <img
              className="h-6 w-6 hover:scale-110"
              loading="lazy"
              alt=""
              src="/linkedin@2x.png"
            />
            </Link>
            
          </div>
          
            <IconButton
              edge="end"
              className="lg:flex hidden"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </header>

    </div>

        <Drawer anchor="right" open={drawerOpen} className='' onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
    </>

  )
}

export default NavBar
