import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm Josh Boepple
                <br />
                <h2>Front End Web Developer / Website Creator</h2>
                </h1>
                <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
      </div>
    )
}

export default Home