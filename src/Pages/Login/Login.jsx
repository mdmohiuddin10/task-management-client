import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/Providers";
import Socail from "../../Layouts/Shared/Socail/Socail";
import { Link } from "react-router-dom";


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
            <div className="flex lg:min-h-screen bg-white">
                <div className="flex-1 w-full shadow-2xl px-10 mt-52">
                    <h2 className="text-center text-3xl font-semibold">Login</h2>
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
                <div className="flex-1 pt-52 pl-32 rounded-bl-full bg-[#e0a950] text-center lg:text-left">
                    <h1 className="text-xl font-bold">New to Website? Please!</h1>
                    <Link to={'/register'}>
                        <button className="btn mt-5">Register</button>
                    </Link>
                    <img className="-ml-16" src="https://i.postimg.cc/wv7dxcjQ/person-with-huge-pencil-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;