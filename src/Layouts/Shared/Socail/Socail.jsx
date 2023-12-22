import { useContext } from "react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Providers/Providers";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const Socail = () => {
    const { googleSignIn } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()


    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                // send user data to the database
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "User Logged Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        navigate('/')
                    })
            })
    }
    return (
        <div>
            <p className="text-center text-lg mt-3 mb-3">or sign up</p>
            <div className="flex gap-5 justify-center text-3xl pb-5">
                <button><FaFacebook></FaFacebook></button>
                <button onClick={handleGoogle}><FaGoogle></FaGoogle></button>
                <button><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default Socail;
