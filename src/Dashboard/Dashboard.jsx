import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";


const Dashboard = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#FCA61F] pt-10">
                <div className="flex justify-center items-center">
                    <img className="w-[70px] rounded-full" src={user?.photoURL} alt="User" />
                </div>
                <p className="text-2xl font-bold text-center mb-5">{user?.displayName}</p>
                <ul className="menu text-xl px-5 space-y-5">
                    <li><NavLink to={'/dashboard/createTask'}>
                        <FaHome></FaHome>
                        Create Task</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/toDoList'}>
                        <FaBook></FaBook>
                        To Do List</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/allTask'}>
                        <FaUsers></FaUsers>
                        All Task</NavLink>
                    </li>

                    {/* shared nav links */}
                    <div className="divider"></div>

                    <li><NavLink to={'/'}>
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li><NavLink to={'/order/contact'}>
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
                    </li>

                </ul>

            </div>
            {/* dashboard content */}
            <div className="flex-1 pt-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;