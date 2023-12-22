import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/Providers";
import Socail from "../../Layouts/Shared/Socail/Socail";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { creatUser, updateUserProfile } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const Navigate = useNavigate()

    const onSubmit = data => {
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    Navigate('/')
                                }
                            })

                    })

                    .catch(error => console.log(error))
            })
            .then(error => {
                console.log(error);
            })

    };
    return (
        <div className="flex lg:min-h-screen bg-white">
            <div className="flex-1 rounded-br-full bg-[#e0a950] text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="flex-1 w-full shadow-2xl px-10 mt-52">
                <h2 className="text-center text-3xl font-semibold">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" name="name" placeholder="Your name" className="input input-bordered" />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="password" name="password" placeholder="Password" className="input input-bordered" />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <input className="bg-[#e0a950] py-2 rounded-xl" type="submit" value="Register" />
                    </div>
                  
                    <Socail></Socail>
                </form>
            </div>
        </div>
    );
};

export default Register;