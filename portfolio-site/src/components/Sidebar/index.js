import './index.scss';
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.jpg';
import LogoSubtitle from '../../assets/images/logo_sub.jpeg';


const Sidebar = () => (
    <div className='navbar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img src={LogoSubtitle} alt="logo" />
        </Link>
    </div>
)

export default Sidebar