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
                        <div className="flex gap-5 px-5">
                            <div className="flex-1">
                                <img src="https://i.postimg.cc/FH5Cntk4/7118756-3426526.jpg" alt="" />
                            </div>
                            <div className="flex-1 mt-20">
                                <h2 className="text-center text-3xl font-semibold">Developers</h2>
                                <div className="w-1/4 mx-auto mt-3 font-bold">
                                    <hr />
                                </div>
                                <div>
                                    <h2 className="text-xl font-medium">Efficient Code Collaboration:</h2>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Enable developers to collaborate seamlessly by providing a platform for task assignment, code review, and version control integration.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Foster effective communication within development teams, ensuring everyone is on the same page regarding project progress.</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h2 className="text-xl font-medium">Resource Allocation and Capacity Planning:</h2>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Assist in resource allocation by providing insights into team capacity and workload.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Help developers and project managers make informed decisions about resource distribution and workload management.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Help developers and project managers make informed decisions about resource distribution and workload management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex gap-5 px-5">
                            <div className="flex-1">
                                <img src="https://i.postimg.cc/mD7MpnvP/13785128-5362163.jpg" alt="" />
                            </div>
                            <div className="flex-1 mt-20">
                                <h2 className="text-center text-3xl font-semibold">Bankers</h2>
                                <div className="w-1/4 mx-auto mt-3 font-bold">
                                    <hr />
                                </div>
                                <div>
                                    <h2 className="text-xl font-medium">Compliance and Regulatory Tracking:</h2>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Streamline compliance management by providing a centralized platform for tracking regulatory tasks and deadlines.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >2. </span>
                                        <p className="ml-2">Facilitate adherence to industry regulations and ensure that compliance activities are efficiently managed and documented.</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h2 className="text-xl font-medium">Document Management and Security:</h2>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Offer a secure and organized document management system to handle sensitive financial documents and client information.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Implement robust security measures to protect confidential data and ensure compliance with privacy regulations.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Enhance coordination between team members working on complex financial transactions and projects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex gap-5 px-5">
                            <div className="flex-1">
                                <img src="https://i.postimg.cc/sDTfzcy1/businessman-making-ok-sign-white-background.jpg" alt="" />
                            </div>
                            <div className="flex-1 mt-20">
                                <h2 className="text-center text-3xl font-semibold">Corporate Professionals</h2>
                                <div className="w-1/4 mx-auto mt-3 font-bold">
                                    <hr />
                                </div>
                                <div>
                                    <h2 className="text-xl font-medium">Time Management and Productivity:</h2>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Empower corporate professionals to manage their time effectively by offering features for task prioritization, deadline tracking, and time blocking.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >2. </span>
                                        <p className="ml-2">Enhance overall productivity by providing a centralized platform for organizing and managing daily tasks and projects.</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h2 className="text-xl font-medium">Meeting and Event Management:</h2>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Streamline meeting scheduling, agenda creation, and follow-up tasks, allowing professionals to make the most out of their meetings.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >2. </span>
                                        <p className="ml-2">Assist in event planning by providing tools for task delegation, timeline management, and coordination.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >3. </span>
                                        <p className="ml-2">Enhance visibility into project progress and enable effective project management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex gap-5">
                            <div className="flex-1">
                                <img src="https://i.postimg.cc/pXXd7d4f/group-young-joyful-students-standing-with-book-bags.jpg" alt="" />
                            </div>
                            <div className="flex-1 mt-20 px-5">
                                <h2 className="text-center text-3xl font-semibold">Students</h2>
                                <div className="w-1/4 mx-auto mt-3 font-bold">
                                    <hr />
                                </div>
                                <div>
                                    <h2 className="text-xl font-medium">Assignment and Deadline Tracking:</h2>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Help students stay organized by providing a platform to track assignments, deadlines, and important dates.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >2. </span>
                                        <p className="ml-2">Enable automatic reminders to ensure students never miss submission deadlines.</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h2 className="text-xl font-medium">Time Management and Study Planning:</h2>
                                    <div className="flex mt-3">
                                        <span >1. </span>
                                        <p className="ml-2">Empower students to manage their time effectively with features for scheduling study sessions, setting priorities, and creating to-do lists.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >2. </span>
                                        <p className="ml-2">Assist in creating a balanced study routine to improve productivity.</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <span >3. </span>
                                        <p className="ml-2">Facilitate collaboration on group projects by offering tools for task assignment, progress tracking, and communication.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </div>
    );
};

export default Benefit;