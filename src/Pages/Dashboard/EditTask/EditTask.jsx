import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";


const EditTask = () => {
    const { register, handleSubmit } = useForm()
    const { id } = useParams()
    console.log(id);


    const onSubmit = data => {
        console.log(data);

    };
    return (
        <div>
            <div className="bg-[#F3F3F3] mx-10 px-10 py-5">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Task Title*</span>
                        </label>
                        <input {...register('name')} type="text" placeholder="Task Title" className="input input-bordered w-full" required />
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
                                <option value="moderate">moderate</option>
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
                        <textarea {...register('task description')} className="textarea textarea-bordered h-32" required placeholder="Task Details"></textarea>
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