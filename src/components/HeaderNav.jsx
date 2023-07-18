import { Link } from "react-router-dom"

const HeaderNav = () => {
  return (
    <div className="bg-white p-6 px-24 flex justify-between items-center fixed w-full z-50">
      <Link to="/">
        <h1 className="uppercase font-bold text-3xl">Simon-Pixel</h1>
      </Link>
        <div>
            <ul className="flex gap-x-8 uppercase font-semibold tracking-widest">
                <Link to="/">Home</Link>
                <Link to="/personal">Personal</Link>
                <Link to="/weedings">Weddings</Link>
                <Link>Contact</Link>
            </ul>
        </div>
    </div>
  )
}

export default HeaderNav