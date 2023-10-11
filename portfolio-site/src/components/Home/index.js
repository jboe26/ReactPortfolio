// import LogoSub from '../../assets/images/logo_sub.jpeg';
import { Link } from 'react-router-dom';

import './index.scss';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm Josh Boepple
                {/* <img src={LogoSub} alt="developer name" /> */}
                <br />
                <h2>Front End Web Developer</h2>
                </h1>
                <Link to='contact' className='flat-button'>Contact Me</Link>
            </div>

        </div>
    )
}

export default Home