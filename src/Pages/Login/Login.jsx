import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/Providers";
import Socail from "../../Layouts/Shared/Socail/Socail";


const Login = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { signIn } = useContext(AuthContext)


    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .error(error => {
                console.log(error);
            })
    }

    return (
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
                                <input type="submit" value="Login" />
                            </div>
                            <Socail></Socail>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;