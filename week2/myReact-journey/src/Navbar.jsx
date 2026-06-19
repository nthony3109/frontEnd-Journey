import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="flex gap-4 bg-gray-900 text-white">
            <h1>Navbar </h1>
            <NavLink to="/" className={({isActive}) => (isActive) ? "text-white rounded-4xl bg-gray-950 px-3" : "rounded-4xl text-black px-3 font-sans bg-mist-500"} >Dashboard</NavLink>
            <NavLink to="/transactions" className={({isActive}) => (isActive) ? "text-white px-3 rounded-4xl  bg-gray-950" : "rounded-4xl px-3 text-black font-sans bg-mist-500"}>Transactions</NavLink>
            <NavLink to="/profile" className={({isActive}) => (isActive) ? "text-white px-3 rounded-4xl bg-gray-950" : "rounded-4xl text-black px-3 font-sans bg-mist-500"}>Profile</NavLink>
             <NavLink to="/addtnx" className={({isActive}) => (isActive) ? "text-white px-3 rounded-4xl bg-gray-950" : "rounded-4xl text-black px-3 font-sans bg-mist-500"}>Add Transaction</NavLink>

        </nav>
    )
}
export default Navbar