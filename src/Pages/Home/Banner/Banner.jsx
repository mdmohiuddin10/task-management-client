import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero lg:min-h-screen bg-[#fff]">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Seamless Task Management for Success</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to={'/login'}>
                        <button className="btn btn-primary">Let‟s Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;