import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.jpg'
// import LogoSubtitle from '../../assets/images/logo_sub.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    
} from '@fortawesome/free-solid-svg-icons'

import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link
                className="logo"
                to="/"
                onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="Logo" />
            </Link>
            <h1 className='name'>Josh Boepple</h1>
            <nav>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/joshrboepple/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/jboe26?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
            
        </div>
    )
}

export default Sidebar