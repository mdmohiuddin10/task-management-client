import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/Providers";



const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { creatUser, updateUserProfile } = useContext(AuthContext)

    const onSubmit = data => {
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        // create user entry in the database
                        // const userInfo = {
                        //     name: data.name,
                        //     email: data.email
                        // }
                        // axiosPublic.post('/users', userInfo)
                        //     .then(res => {
                        //         if (res.data.insertedId) {
                        //             reset()
                        //             Swal.fire({
                        //                 position: "center",
                        //                 icon: "success",
                        //                 title: "User Created Successfully",
                        //                 showConfirmButton: false,
                        //                 timer: 1500
                        //             });
                        //             Navigate('/')
                        //         }
                        //     })

                    })

                    .catch(error => console.log(error))
            })
            .then(error => {
                console.log(error);
            })

    };
    return (
        <div>
            <div>
                <div className="lg:hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="flex-1 w-full shadow-2xl bg-base-100">
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
                                   <input type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;