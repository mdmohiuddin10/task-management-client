import SectionTitle from "../../../Layouts/Shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


const Benefit = () => {
    return (
        <div>
            <SectionTitle heading={'Who Benefits from Our Platform?'}></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className="flex gap-5">
                            <div className="flex-1">
                                <img src="https://i.postimg.cc/FH5Cntk4/7118756-3426526.jpg" alt="" />
                            </div>
                            <div className="flex-1 mt-20">
                                <h2 className="text-center text-3xl font-semibold">Developers</h2>
                                <ul className="space-y-3 mt-5">
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex gap-5">
                            <div className="flex-1">
                                <img src="https://i.postimg.cc/mD7MpnvP/13785128-5362163.jpg" alt="" />
                            </div>
                            <div className="flex-1 mt-20">
                                <h2 className="text-center text-3xl font-semibold">Bankers</h2>
                                <ul className="space-y-3 mt-5">
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex gap-5">
                            <div className="flex-1">
                                <img src="https://i.postimg.cc/sDTfzcy1/businessman-making-ok-sign-white-background.jpg" alt="" />
                            </div>
                            <div className="flex-1 mt-20">
                                <h2 className="text-center text-3xl font-semibold">Corporate Professionals</h2>
                                <ul className="space-y-3 mt-5">
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex gap-5">
                            <div className="flex-1">
                                <img src="https://i.postimg.cc/pXXd7d4f/group-young-joyful-students-standing-with-book-bags.jpg" alt="" />
                            </div>
                            <div className="flex-1 mt-20">
                                <h2 className="text-center text-3xl font-semibold">Students</h2>
                                <ul className="space-y-3 mt-5">
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                    <li>Streamlined Project Tasks</li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </div>
    );
};

export default Benefit;