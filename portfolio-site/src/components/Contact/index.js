import './index.scss';

const Contact = () => {

    return (
        <div>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1 className='contact-section'>
                        Contact Me
                    </h1>
                    <p className='contact-section'>
                        I am interested in freelance opportunities - especially ambitious or large projects. <br /> 
                        If you have any other requests, please use the form below to contact me.
                    </p>
                    <div className='contact-form'>
                        <form name="contact" method="POST" netlify>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='E-mail' required />
                                </li>
                                <li className='half'>
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                <button type="submit" className='flat-button'>Send</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact