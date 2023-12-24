import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
            <li className="mb-2"><NavLink to={'/about'}>About Us</NavLink></li>
            <li className="mb-2"><NavLink to={'/contact'}>Contact</NavLink></li>
            <li className="mb-2"><NavLink to={'/register'}>My Account</NavLink></li>
            <li className="mb-2"><NavLink to={'/dashboard/user'}>Dashboard</NavLink></li>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-3xl hover:text-[#FCA61F]" href=""><FaFacebook></FaFacebook></a>
                    <a className="text-3xl hover:text-[#FCA61F]" href=""><FaLinkedin></FaLinkedin></a>
                    <a className="text-3xl hover:text-[#FCA61F]" href=""><FaGithub></FaGithub></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by TaskHarbor limited</p>
            </aside>
        </footer>
    );
};

export default Footer;