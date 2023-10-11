import './index.scss';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import LogoS from '../../assets/images/logo-s.jpg';
import LogoSubtitle from '../../assets/images/logo_sub.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
// import { FaLinkedin } from "react-icons/fa";

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="logo" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#fff' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#fff' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='projects-link' to='/projects'>
                <FontAwesomeIcon icon={faLaptopCode} color='#fff' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#fff' />
            </NavLink>
        </nav>
        {/* <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joshrboepple/">
                    <FontAwesomeIcon icon={FaLinkedin} color="#4d4d4e" />
                </a>
            </li>
        </ul> */}
    </div>
)

export default Sidebar