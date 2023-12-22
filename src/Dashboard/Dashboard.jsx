import { NavLink, Outlet } from "react-router-dom";
import {  FaBook, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054] pt-10">
                <h2 className="text-3xl font-bold text-center">Al Rahman</h2>
                <p className="text-3xl font-bold text-center mb-5">Restorent</p>
                <ul className="menu text-xl px-5 space-y-5">
                    <li><NavLink to={'/dashboard/createTask'}>
                        <FaHome></FaHome>
                      Create Task</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/editTask'}>
                        <FaUtensils></FaUtensils>
                        Edit Task</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/previousTasks'}>
                        <FaList></FaList>
                        Previous Tasks</NavLink>
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