import { useContext } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Layouts/Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Providers/Providers";
import { useQuery } from "@tanstack/react-query";


const ToDolist = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    const { data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/taskData')
            return res.data;
        }
    })

    const newData = tasks.filter(data => data?.userEmail === user?.email)
    console.log(newData);

    return (
        <div className="px-5">
            <SectionTitle heading={'To Do List'}></SectionTitle>
            <div className="flex gap-5">
                <div className="flex-1 bg-[#cfccc6]">
                    <h2 className="text-center text-xl mt-5 font-semibold">To Do</h2>
                    <div className="px-5 mt-5">
                        {
                            newData.map(task => <div key={task._d} className="card bg-base-100 shadow-xl">
                                <div className="px-3 py-5">
                                    <h2 className="text-md">Task: {task.title}</h2>
                                    <p>Task Level: {task.Priority}</p>
                                    <p>Task Deadlines: {task.Deadlines}</p>
                                    <p>Task status: {task.status}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="flex-1 bg-[#FCA61F] min-h-screen">
                    <h2 className="text-center text-xl mt-5 font-semibold">ongoing</h2>
                </div>
                <div className="flex-1 bg-[#998058]">
                    <h2 className="text-center text-xl mt-5 font-semibold">Completed</h2>
                </div>
            </div>
        </div>
    );
};

export default ToDolist;