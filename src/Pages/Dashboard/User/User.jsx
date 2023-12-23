import { useContext } from "react";
import { AuthContext } from "../../../Providers/Providers";


const User = () => {
    const { user }= useContext(AuthContext)
    return (
        <div className="px-5">
            <h2 className="text-center">Welcome Back <span className="text-2xl font-semibold">{user?.displayName}</span></h2>
        </div>
    );
};

export default User;