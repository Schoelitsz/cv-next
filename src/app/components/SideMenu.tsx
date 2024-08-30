import React from 'react';
import { Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFile, faHeart, faComputerMouse, faPhone, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


const SideMenu: React.FC = () => {
  return (
    <div className="side-menu">
      <div>
        <a href="#Home">
          <FontAwesomeIcon icon={faStar} />
          <span>About Me</span>
        </a>
        <a href="#Resume">
          <FontAwesomeIcon icon={faFile} />
          <span>Resume</span>
        </a>
        <a href="#Skills">
          <FontAwesomeIcon icon={faHeart} />
          <span>Skills</span>
        </a>
        <a href="#Projects">
          <FontAwesomeIcon icon={faComputerMouse} />
          <span>Projects</span>
        </a>
        <a href="#Contact">
          <FontAwesomeIcon icon={faPhone} />
          <span>Contact</span>
        </a>
        <a href="#About">
          <FontAwesomeIcon icon={faCircleInfo} />
          <span>About this App</span>
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
