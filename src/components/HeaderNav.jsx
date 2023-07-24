import { Link } from "react-router-dom"
import { auth } from "../firebase/config"
import { BiPowerOff } from 'react-icons/bi'
import { signOut } from "firebase/auth"

const HeaderNav = () => {



  return (
    <div className="bg-white p-6 px-24 flex justify-between items-center fixed w-full z-50">
      <Link to="/">
        <h1 className="uppercase font-bold text-3xl">Simon-Pixel</h1>
      </Link>
        <div>
            <ul className="flex items-center gap-x-8 uppercase font-semibold tracking-widest">
                <Link to="/">Home</Link>
                <Link to="/personal">Personal</Link>
                <Link to="/creative">Creative</Link>
                <Link to="/weedings">Weddings</Link>
                <Link>Contact</Link>
                {auth?.currentUser?.email && (
                  <BiPowerOff className="text-xl cursor-pointer" onClick={() => signOut(auth)} />
                )}
            </ul>
        </div>
    </div>
  )
}

export default HeaderNav