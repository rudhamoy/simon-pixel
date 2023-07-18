import { Outlet } from 'react-router-dom'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className='relative'>
            <HeaderNav />
            <p className='fixed left-5 bottom-24 -rotate-90 uppercase font-semibold tracking-widest cursor-pointer'>Explore</p>
            <div className='p-5 px-24'>
                <Outlet />
            </div>
            <p className='fixed right-5 bottom-24 rotate-90 uppercase font-semibold tracking-widest cursor-pointer'>Contact</p>
            <Footer />
        </div>
    )
}

export default Layout