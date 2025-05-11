import {Link} from 'react-router-dom';
import { FaTachometerAlt } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import './index.css'

const HomeHeader = () => (
    <nav className="nav-home-header">
        <div className='nav-home-header-logo'>
            <h1 className='home-header'>CREDIT APP</h1>
        </div>
        <div className="nav-home-header-menu">
            <Link to="/" className="nav-home-header-icons">
                <FaTachometerAlt className='icons' />
                <p className='nav-home-links'>Home</p>
            </Link>
            <div className="nav-home-header-icons">
                <MdCurrencyRupee className='home-icons' />
                <p className='nav-home-links'>Payments</p>
            </div>
            <div className="nav-home-header-icons">
                <FaBook className='home-icons' />
                <p className='nav-home-links'>Budget</p>
            </div>
            <div className="nav-home-header-icons">
                <CiCreditCard1 className='home-icons' />
                <p className='nav-home-links'>Card</p>
            </div>
        </div>
        <div className="nav-home-header-search">
            <div>
                <IoNotifications className='home-icons' />
                <AiFillMessage className='home-icons' />
                <FaUserCircle className='home-icons' />
            </div>
            <div className="nav-home-header-user">
                <Link to="/" className='home-user-types'>
                    <p>User</p>
                </Link>
                <Link to="/verifier" className='home-user-types'>
                    <p>Verifier</p>
                </Link>
                <Link to="/admin" className='home-user-types'>
                    <p>Admin</p>
                </Link>
            </div>
        </div>
    </nav>
)
export default HomeHeader