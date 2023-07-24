import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AdminLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ currentUser, setCurrentUser] = useState()

    const navigate = useNavigate();

    const signUp = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error('Error Signing up:', error.message);
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setCurrentUser(user);
          } else {
            setCurrentUser(null);
          }
        });
    
        return () => unsubscribe();
      }, []);

    useEffect(() => {
        if(currentUser) {
            navigate("/")
        }
    }, [currentUser])


    return (
        <div className='flex justify-center items-center h-[100vh]'>
            
            <div className='shadow-md rounded-sm p-4 bg-white flex flex-col gap-3 w-[320px]'>
                <input type="text" placeholder='email' className='border p-2' onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder='password' className='border p-2' onChange={e => setPassword(e.target.value)} />
                <button onClick={signUp} className='bg-black text-white p-2'>Login</button>
                {/* <button onClick={() => signOut(auth)} className='bg-black text-white p-2'>Logout</button> */}
            </div>
        </div>
    )
}

export default AdminLogin