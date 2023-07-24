import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdModeEditOutline } from 'react-icons/md'
import AddForm from '../components/AddForm'

const AdminTab = () => {

    const location = useLocation()

    const [expand, setExpand] = useState(false)

    return (
        <div className={`bg-white p-2 px-4 rounded-md border shadow-md  ${expand && "w-[70vw] h-[70vh]"}`}>
            <div className='flex'>
                <button onClick={() => setExpand(true)} className='p-2 border rounded-md mx-2'>Add {location.pathname.split("/")[1]} +</button>
                <button className='p-2 border rounded-md mx-2 flex items-center gap-x-1'>Edit page <MdModeEditOutline /></button>
                <button onClick={() => setExpand(false)} className={`p-2 border rounded-md mx-2 flex items-center gap-x-1 ${!expand && "hidden"}`}>Cancel</button>
            </div>
            {expand && (
                <div>
                    <AddForm />
                </div>
            )}
        </div>
    )
}

export default AdminTab