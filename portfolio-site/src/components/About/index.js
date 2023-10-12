import './index.scss';
import ReactRoundedImage from "react-rounded-image";
import JoshPicture from '../../assets/images/joshpicture.jpg';


const About = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1 className='about-section'>
                    About Me
                </h1>
                   <ReactRoundedImage
                    image={JoshPicture}
                    roundedColor=""
                    imageWidth="200"
                    imageHeight="200"
                    roundedSize="20"
                    borderRadius=""
                />
                <p className='about-section'>Hi, I'm Josh. Nice to meet you!</p>
             
                <p className='about-section'>I am passionate about building code and applications that improve the quality of companies
                    and individual lives.<br />
                    I specialize in front-end developement for clients.
                    My goal is to serve clients in multiple areas including: <br /> individuals, small-businesses,
                    and large corporations.</p>

                <p className='about-section'>I am naturally curious, a problem solver, and persistent on finishing goals and deadlines set before me.<br />
                    I enjoy projects of all kinds that challenge me to become a greater developer.</p>
            </div>

        </div>
    )
}

export default About