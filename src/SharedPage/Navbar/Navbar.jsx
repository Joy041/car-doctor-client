import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { CarContext } from "../../Routes/AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logout } = useContext(CarContext)

    const handleLogout = () => {
        logout()
            .then(() => {
                alert('Logout successful')
            })
    }

    const navItem = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/service'}>Service</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn mr-3 bg-red-500 border-0">
                    {user ? <Link onClick={handleLogout} className='text-decoration-none text-white px-3' to='/login'>Logout</Link> : <Link to='/login' className='text-decoration-none text-white' >Login</Link>}
                </button>
                <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;