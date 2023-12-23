import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Providers";
import { Link } from "react-router-dom";


const AllTasks = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/taskData')
            return res.data;
        }
    })

    const newData = tasks.filter(data => data?.userEmail === user?.email)
    console.log(newData);


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/taskData/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>DateLine</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newData.map((task, index) => <tr key={task._id}>
                            <th>{index + 1}</th>
                            <td>{task.title}</td>
                            <td>{task.status}</td>
                            <td>{task.Deadlines}</td>
                            <td>
                                <Link to={`/dashboard/editTask/${task._id}`}>
                                    <button className="btn">Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(task._id)} className="btn">Delete</button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTasks;