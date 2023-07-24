import { Link } from "react-router-dom"
import ContactForm from "../components/ContactForm"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Homepage = () => {
    return (
        <div>
            <div className="fixedImage "></div>
            <div
                className='mt-40 '
            // flex justify-center gap-4 flex-wrap
            >

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="12px">

                        <Link to="/personal" className=" overflow-hidden cursor-pointer relative">
                            <img
                                src="https://images.pexels.com/photos/14664628/pexels-photo-14664628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                                className='w-[100%] block'
                            />
                            <div className='absolute inset-0 top-0 left-0 h-[100%] w-[100%] opacity-0 hover:opacity-100 bg-white bg-opacity-0 hover:bg-opacity-75 flex justify-center items-center'>
                                <span className='text-2xl uppercase font-semibold'>Image Title</span>
                            </div>
                        </Link>

                        <Link to="/personal" className=" overflow-hidden cursor-pointer relative">
                            <img
                                src="https://images.unsplash.com/photo-1684318551812-63d888cce300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                alt=""
                                className='w-[100%] block'
                            />
                            <div className='absolute inset-0 top-0 left-0 h-[100%] w-[100%] opacity-0 hover:opacity-100 bg-white bg-opacity-0 hover:bg-opacity-75 flex justify-center items-center'>
                                <span className='text-2xl uppercase font-semibold'>Image Title</span>
                            </div>
                        </Link>

                        <Link to="/personal" className=" overflow-hidden cursor-pointer relative">
                            <img
                                src="https://images.pexels.com/photos/17051611/pexels-photo-17051611/free-photo-of-man-holding-vintage-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                                className='w-[100%] block'
                            />
                            <div className='absolute inset-0 top-0 left-0 h-[100%] w-[100%] opacity-0 hover:opacity-100 bg-white bg-opacity-0 hover:bg-opacity-75 flex justify-center items-center'>
                                <span className='text-2xl uppercase font-semibold'>Image Title</span>
                            </div>
                        </Link>

                        <Link to="/personal" className=" overflow-hidden cursor-pointer relative">
                            <img
                                src="https://images.unsplash.com/photo-1675143741091-db2a4791658c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                                alt=""
                                className='w-[100%] block'
                            />
                            <div className='absolute inset-0 top-0 left-0 h-[100%] w-[100%] opacity-0 hover:opacity-100 bg-white bg-opacity-0 hover:bg-opacity-75 flex justify-center items-center'>
                                <span className='text-2xl uppercase font-semibold'>Image Title</span>
                            </div>
                        </Link>
                        <Link to="/personal" className=" overflow-hidden cursor-pointer relative">
                            <img
                                src="https://images.unsplash.com/photo-1643087923902-4b6c52e4a46f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
                                alt=""
                                className='w-[100%] block'
                            />
                            <div className='absolute inset-0 top-0 left-0 h-[100%] w-[100%] opacity-0 hover:opacity-100 bg-white bg-opacity-0 hover:bg-opacity-75 flex justify-center items-center'>
                                <span className='text-2xl uppercase font-semibold'>Image Title</span>
                            </div>
                        </Link>
                        <Link to="/personal" className=" overflow-hidden cursor-pointer relative">
                            <img
                                src="https://images.unsplash.com/photo-1625753891853-bdcedeac190f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                                alt=""
                                className='w-[100%] block'
                            />
                            <div className='absolute inset-0 top-0 left-0 h-[100%] w-[100%] opacity-0 hover:opacity-100 bg-white bg-opacity-0 hover:bg-opacity-75 flex justify-center items-center'>
                                <span className='text-2xl uppercase font-semibold'>Image Title</span>
                            </div>
                        </Link>

                    </Masonry>
                </ResponsiveMasonry>

            </div>
            <div className="h-[100vh] my-28 flex flex-col justify-center items-center gap-y-10 bg-gray-100 p-10">
                <div>
                    <h1 className="text-3xl font-bold">I've been waiting for you</h1>
                    <p className="">Let's work together!</p>
                </div>
                <ContactForm />
            </div>
            <div className=''>
                <h1 className='uppercase underline text-2xl text-center pb-4 cursor-pointer'>Instagram</h1>
                <h1 className='uppercase underline text-2xl text-center pb-4 cursor-pointer'>facebook</h1>
                <h1 className='text-2xl text-center pb-4'>simonreang2002@gmail.com</h1>
                <h1 className='text-2xl text-center pb-4'>+91 7085123456</h1>
            </div>
        </div>
    )
}

export default Homepage