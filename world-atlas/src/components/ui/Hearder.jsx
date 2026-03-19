import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";


export const Headers = () => {

    const handleButtonToggle = () => {
        
    }


    return <header>
        <div className="bg-gray-800 pt-8 pb-8 flex justify-between items-center">
            <div className="ml-[15%]">
                <NavLink to="/">
                    <h1 className=" font-extrabold text-3xl"> WorldAtlas </h1>
                </NavLink>
            </div>

            <nav className="mr-[15%]">
                <ul className="flex gap-6">
                    <li className="hover:text-amber-700"> <NavLink to="/"> Home </NavLink> </li>
                    <li className="hover:text-amber-700"> <NavLink to="/about"> About </NavLink> </li>
                    <li className="hover:text-amber-700"> <NavLink to="/country"> Country </NavLink> </li>
                    <li className="hover:text-amber-700"> <NavLink to="/contact"> Contact </NavLink> </li>
                </ul>
            </nav>

            <div>
                <button onClick={handleButtonToggle}> 
                    <GiHamburgerMenu />
                </button>
            </div>
        </div>
    </header>
}