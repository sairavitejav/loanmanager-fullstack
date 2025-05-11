import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import './index.css'

const HomeHeader = () => (
    <nav className="nav-header">
        <div className='nav-header-logo'>
            <h1 className='header'>CREDIT APP</h1>
            <GiHamburgerMenu className='icons' />
        </div>
        <div className="nav-header-search">
            <div>
                <IoNotifications className='icons' />
                <AiFillMessage className='icons' />
                <FaUserCircle className='icons' />
            </div>
            <div className="nav-header-user">
                <Link to="/" className='user-types'>
                    <p>User</p>
                </Link>
                <Link to="/verifier" className='user-types'>
                    <p>Verifier</p>
                </Link>
                <Link to="/admin" className='user-types'>
                    <p>Admin</p>
                </Link>
            </div>
        </div>
    </nav>
)
export default HomeHeader