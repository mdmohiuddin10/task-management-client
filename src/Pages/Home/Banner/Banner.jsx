import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero lg:min-h-screen bg-[#fff]">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Seamless Task Management for Success</h1>
                    <p className="py-6">Your Tasks, Our Priority: A New Era of Productivity</p>
                    <Link to={'/login'}>
                        <button className="btn bg-[#FCA61F]">Let‟s Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;