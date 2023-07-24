import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const CreativePage = () => {

  const [creativeData, setCreativeData] = useState([])

  const creativeCollection = collection(db, 'creative')

  useEffect(() => {
    const getCreativeList = async () => {
      try {
        const data = await getDocs(creativeCollection)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
        setCreativeData(filteredData)
      } catch (error) {
        console.log(error)
      }
    }

    getCreativeList()
  }, [])

  console.log(creativeData)

  return (
    <div className='mt-20'>
      <div className='mt-10'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="12px">
            {creativeData.map((data) => (
              <img src={data.images[0]} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default CreativePage