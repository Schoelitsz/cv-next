import React from 'react';
import { sql } from "@vercel/postgres";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFile, faHeart, faComputerMouse, faPhone, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const SideMenu: React.FC = () => {

  // const { rows } = await sql`Se`
  return (
    <div className="side-menu w-64 h-screen text-white flex flex-col pt-10 pl-1 fixed top-0 left-0 bottom-0">
      <div className="flex flex-col space-y-16">
        <a href="#Home" className="flex items-center h-10 text-lg">
          <FontAwesomeIcon icon={faStar} className="text-gray-700 text-sm mr-2" />
          <span>About Me</span>
        </a>
        <a href="#Resume" className="flex items-center h-10 text-lg">
          <FontAwesomeIcon icon={faFile} className="text-gray-700 text-sm mr-2" />
          <span>Resume</span>
        </a>
        <a href="#Skills" className="flex items-center h-10 text-lg">
          <FontAwesomeIcon icon={faHeart} className="text-gray-700 text-sm mr-2" />
          <span>Skills</span>
        </a>
        <a href="#Projects" className="flex items-center h-10 text-lg">
          <FontAwesomeIcon icon={faComputerMouse} className="text-gray-700 text-sm mr-2" />
          <span>Projects</span>
        </a>
        <a href="#About" className="flex items-center h-10 text-lg">
          <FontAwesomeIcon icon={faCircleInfo} className="text-gray-700 text-sm mr-2" />
          <span>About this App</span>
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
