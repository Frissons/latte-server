import { BiExit, BiUserCircle } from 'react-icons/bi';
import { BsShieldLock } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import './header.css'
import Logo from '../assets/logo.svg';


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const logoutUser = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (

        <header className='header'>
            <div className="matti__logo">
                <p><Link to='/' ><img src={Logo} alt="logo" href='#home' />MNHS</Link></p>
            </div>
            <ul>
                {user ?
                (
                    <li>
                        <button className="btn" onClick={logoutUser} >
                            <BiExit /> Logout
                        </button>
                    </li>
                ) :
                (
                    <>
                    <li>
                        <Link to='/login' >
                            <BsShieldLock /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/register' >
                            <BiUserCircle /> Register
                        </Link>
                    </li>
                        </>
                )}
            </ul>
        </header>

    )
}

export default Header