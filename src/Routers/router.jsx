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
import PreviousTask from "../Pages/Dashboard/PreviousTask/PreviousTask";

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
        element: <Dashboard></Dashboard>,
        children: [
            // normal users
            {
                path: 'user',
                element: <User></User>
            },
            {
                path: 'createTask',
                element: <CreateTasks></CreateTasks>
            },
            {
                path: 'editTask',
                element: <EditTask></EditTask>
            },
            {
                path: 'previousTasks',
                element: <PreviousTask></PreviousTask>
            },
            {
                path: 'user',
                element: <User></User>
            },
        ]
    }
]);

export default router