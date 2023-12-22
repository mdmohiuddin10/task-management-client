import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/Providers";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log('from navbar', user);
    const navigate = useNavigate()

    const navLink = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "text-black hover:bg-[#FCA61F] hover:text-black"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "text-black hover:bg-[#FCA61F] hover:text-black"
                }
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "text-black hover:bg-[#FCA61F] hover:text-black"
                }
            >
                Register
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "text-black hover:bg-[#FCA61F] hover:text-black"
                }
            >
                Contact
            </NavLink>
        </li>
        {user ? <li>
            <NavLink
                to="/dashboard/user"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "text-black hover:bg-[#FCA61F] hover:text-black"
                }
            >
               Dashboard
            </NavLink>
        </li> : <></>}
    </>

    const handleLogOut = () => {
        logOut()
        navigate('/')
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-lg shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className=" hover:bg-white hover:text-[#FCA61F] text-xl font-semibold">TaskHarbor</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-lg font-medium menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex gap-2 justify-center items-center">
                    <h2>{user.displayName}</h2>
                    <img className="w-[40px] rounded-full" src={user?.photoURL} alt="User" />
                    </div> : <></>
                }
                {
                    user ? <button onClick={handleLogOut} className="btn bg-[#FCA61F] hover:bg-white hover:text-[#FCA61F]">Logout</button> : <Link to={'/login'}><button className="btn bg-[#FCA61F] hover:bg-white hover:text-[#FCA61F]">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;