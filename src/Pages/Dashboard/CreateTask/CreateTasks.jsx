import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Providers";
import Swal from "sweetalert2";


const CreateTasks = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
 

    const onSubmit = async(data) => {
       
        const taskData = {
            title: data.title,
            Priority : data.priority,
            Deadlines : data.deadlines,
            TaskDetails: data.taskdescription,
            userEmail: user.email,
            status: 'todo'
        }
        console.log(taskData);

        // send data to database
        const menuRes = await axiosPublic.post('/taskData', taskData);
        console.log(menuRes.data);

        if(menuRes.data.insertedId){
            Swal.fire({
                title: "Added!",
                text: ' task added successfully',
                icon: "success",
                timer: 1500
            });
        }

    };
    return (
        <div>
            <div className="bg-[#F3F3F3] mx-10 px-10 py-5">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Task Title*</span>
                        </label>
                        <input {...register('title')} type="text" placeholder="Task Title" className="input input-bordered w-full" required />
                    </div>
                    <div className="flex gap-6 mt-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Priority*</span>
                            </label>
                            <select defaultValue="default" {...register('priority')} className="select select-bordered w-full" required>
                                <option disabled value="default">Select a Catagory</option>
                                <option value="low">Low</option>
                                <option value="high">High</option>
                                <option value="moderatate">moderate</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Deadlines</span>
                            </label>
                            <input {...register('deadlines')} type="date" placeholder="Deadlines" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text">Task Details*</span>

                        </label>
                        <textarea {...register('taskdescription')} className="textarea textarea-bordered h-32" required placeholder="Task Details"></textarea>
                    </div>
                    <div className="flex justify-center items-center mt-5 gap-5">
                        <input type="submit" value="Create Task" />
                       <Link to={'/dashboard/editTask/:id'}>
                       <button className="btn">Edit</button>
                       </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTasks;