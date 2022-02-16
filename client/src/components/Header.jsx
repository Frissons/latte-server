import {BiUserCircle} from 'react-icons/bi';
import {BsShieldLock} from 'react-icons/bs';
import {Link} from 'react-router-dom';

function Header() {
  return (
    
    <header className='header'>
        <div className="logo">
            <Link to='/' >GoalSetter</Link>
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