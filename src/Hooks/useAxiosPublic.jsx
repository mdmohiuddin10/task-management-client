import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://y-six-rust.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;

