import "./index.scss";
import React from 'react'
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope , faBoxArchive} from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
  return (
    <div className="nav-bar">
        <Link className="logo" to="/">
        <img src={LogoS} alt="suyal"/>
        {/* <img className="sub-logo" src={LogoSub} alt="suyal"/> */}
        </Link>

        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" className="work-link" activeclassname="active" to="/work">
          <FontAwesomeIcon icon={faBoxArchive} color="#4d4d4e" />
        </NavLink>
        
        
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        > 
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink> 

        
        
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/rishabh-suyal-5ba2771aa/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rishabhsuyal"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCrRnSIoORe5FF1hH1t8q7SQ"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
        {/* <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li> */}
      </ul>

    </div>
  )
}

export default Sidebar