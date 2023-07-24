import React from 'react'
import ImageInput, { uploadPhotos } from './ImageInput'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useLocation } from 'react-router-dom'

const AddForm = () => {

    const location = useLocation()

    const collectionName = collection(db, `${location.pathname.split("/")[1]}`)

    const uploadHandler = async () => {
        let allImg = await uploadPhotos()
        await addDoc(collectionName, {images: allImg})
    }

    return (
        <div className='ml-2'>
            <ImageInput />
            <div className='w-full flex justify-center'>
                <button onClick={uploadHandler} className='bg-black text-white px-4 p-2'>Upload</button>
            </div>
        </div>
    )
}

export default AddForm