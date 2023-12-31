import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Weddings = () => {

  const [weddings, setWeddings] = useState([])

  const weddingCollection = collection(db, 'weddings')

  useEffect(() => {
    const getWeddingList = async () => {
      try {
        const data = await getDocs(weddingCollection)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
        setWeddings(filteredData)
      } catch (error) {
        console.log(error)
      }
    }

    getWeddingList()
  }, [])


  return (
    <div className='mt-20'>
      <div className='mt-10'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="12px">
            {weddings.map((data) => (
              <img src={data.images[0]} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Weddings