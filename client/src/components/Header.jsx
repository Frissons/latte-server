import {BiUserCircle} from 'react-icons/bi';
import {BsShieldLock} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import './header.css'
import Logo from '../assets/logo.svg';

function Header() {
  return (
    
    <header className='header'>
        <div className="matti__logo">
            <p><Link to='/' ><img src={Logo} alt="logo" href='#home'/>MNHS</Link></p>
        </div>
        <ul>
            <li>
                <Link to='/login' >
                    <BsShieldLock/> Login
                </Link>
            </li>
            <li>
                <Link to='/register' >
                    <BiUserCircle/> Register
                </Link>
            </li>
        </ul>
    </header>
    
  )
}

export default Header