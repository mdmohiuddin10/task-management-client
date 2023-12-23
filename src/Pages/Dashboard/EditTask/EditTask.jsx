import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const EditTask = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    const { id } = useParams()
    const updetdata = useLoaderData()
    


    const onSubmit = async (data) => {

        const taskData = {
            title: data.title,
            Priority: data.priority,
            Deadlines: data.deadlines,
            TaskDetails: data.taskdescription
        }
        console.log(taskData);

        // send data to database
        const menuRes = await axiosPublic.patch(`/taskData/${updetdata._id}`, taskData);
        console.log(menuRes.data);

        if (menuRes.data.modifiedCount) {
            Swal.fire({
                title: "Updated!",
                text: ' data updated successfully',
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
                        <input {...register('title')} type="text" placeholder="Task Title" defaultValue={updetdata.title} className="input input-bordered w-full" required />
                    </div>
                    <div className="flex gap-6 mt-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Priority*</span>
                            </label>
                            <select defaultValue={updetdata.priority} {...register('priority')} className="select select-bordered w-full" required>
                                <option disabled value="default">Select a Catagory</option>
                                <option value="low">Low</option>
                                <option value="high">High</option>
                                <option value="moderate">moderate</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Deadlines</span>
                            </label>
                            <input {...register('deadlines')} type="date" placeholder="Deadlines" defaultValue={updetdata.Deadlines} className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text">Task Details*</span>

                        </label>
                        <textarea {...register('taskdescription')} className="textarea textarea-bordered h-32" required placeholder="Task Details" defaultValue={updetdata.TaskDetails}></textarea>
                    </div>
                    <div className="flex justify-center items-center mt-5 gap-5">
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTask;