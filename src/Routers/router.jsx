import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Dashboard from "../Dashboard/Dashboard";
import User from "../Pages/Dashboard/User/User";
import EditTask from "../Pages/Dashboard/EditTask/EditTask";
import CreateTasks from "../Pages/Dashboard/CreateTask/CreateTasks";
import ToDolist from "../Pages/Dashboard/ToDoList/ToDolist";
import AllTasks from "../Pages/Dashboard/AllTasks/AllTasks";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    // dashboard
    {
        path: 'dashboard',
        element: <PrivateRouts><Dashboard></Dashboard></PrivateRouts>,
        children: [
            // normal users
            {
                path: 'user',
                element: <PrivateRouts><User></User></PrivateRouts>
            },
            {
                path: 'createTask',
                element: <CreateTasks></CreateTasks>
            },
            {
                path: 'editTask/:id',
                element: <EditTask></EditTask>,
                loader: ({params})=> fetch(`https://y-six-rust.vercel.app/taskData/${params.id}`)

            },
            {
                path: 'toDoList',
                element: <ToDolist></ToDolist>
            },
            {
                path: 'alltask',
                element: <AllTasks></AllTasks>
            },
        ]
    }
]);

export default router