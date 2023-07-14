import React, { useState } from 'react'
import './dashboardcss.css'
import { Link ,useLocation,Outlet} from "react-router-dom";
export default function DashBoard() {

  const [isToggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!isToggled);
  };


  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const location = useLocation();
  const url=location.pathname

  return (
    <body class="dash">
      <div id="wrapper" className={isToggled ? 'toggled' : ''}>

        <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <h2></h2>
          </div>
          <ul class="sidebar-nav">
            <li class={`side-links ${activeLink === 0 ? 'active' : ''}`}>
              <Link onClick={() => handleLinkClick(0)} to="/dashboard/"><i class="fa fa-home"></i>Home</Link>
            </li>
            <li className={`side-links ${activeLink === 1 ? 'active' : ''}`}>
              <Link onClick={() => handleLinkClick(1)} to="/dashboard/budget"><i class="fa fa-solid fa-piggy-bank"></i>Plugins</Link>
            </li>
            <hr />
            <li className={`side-links ${activeLink === 2 ? 'active' : ''}`}>
              <Link onClick={() => handleLinkClick(2)} to="/"><i class="fa fa-solid fa-right-from-bracket"></i>Logout</Link>
            </li>
          </ul>
        </aside>

        <div id="navbar-wrapper">
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a href="#" class="navbar-brand" id="sidebar-toggle" onClick={handleClick}><i class="fa fa-bars"></i></a>
              </div>
              <div class="navbar-header ">
                <a href="#" class="navbar-brand fm" >Finance Manager</a>
              </div>
              <div class="navbar-header">
                <a href="#" class="navbar-brand" ><i class="fa-solid fa-user"></i></a>
              </div>
            </div>
          </nav>
        </div>

        <section id="content-wrapper">
          <div class="row">
            <div class="col-lg-12">
              <Outlet />
            </div>
          </div>
        </section>

      </div>
    </body>
  )
}
