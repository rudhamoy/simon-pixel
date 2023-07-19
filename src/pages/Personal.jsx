
import { useState, useEffect } from 'react'
import './personal.css'
import imag from '../assets/wedding-pics.png'
import playButton from '../assets/playButton.png'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Personal = () => {

  const [ play, setPlay ] = useState(false)

  return (
    <div className='mt-20'
    >
      <div className='rad-grad relative'>
        <div className=' grad' style={{ backgroundImage: `url(${imag})` }}></div>
        <div className="banner--fadeBottom"></div>
        <img 
        src={playButton} 
        className="w-10 absolute top-[50%] left-[50%] cursor-pointer" 
        // onClick={() => setPlay(true)}  
        />
        <div className={`absolute ${play ? "left-0 right-0 bottom-0 top-0" : "w-0]"} h-[80vh] bg-white`}></div>
      </div>

      <div className='mt-10'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="12px">
            <img src="https://images.unsplash.com/photo-1606490194859-07c18c9f0968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
            <img src="https://images.unsplash.com/photo-1597861405049-0b011428568f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            <img src="https://images.unsplash.com/photo-1574871786514-46e1680ea587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
            <img src="https://images.unsplash.com/photo-1600096194735-ec70b8463112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
            <img src="https://images.unsplash.com/photo-1596181243306-e02a1897afb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdlZGRpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
            <img src="https://images.unsplash.com/photo-1583939411023-14783179e581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdlZGRpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Personal