
import { BallTriangle } from "react-loader-spinner";
import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

  

    if (user) {
        return children
    }
    if (loading) {
        return <>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </>
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}
export default PrivateRouts;

