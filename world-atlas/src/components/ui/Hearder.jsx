import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export const Headers = () => {
    const [show, setShow] = useState(false)

    const handleButtonToggle = () => {
        setShow(!show)
    }


    return <header>
        <div className="bg-gray-800 pt-8 pb-8 flex justify-between items-center">
            <div className="ml-[15%]">
                <NavLink to="/">
                    <h1 className=" font-extrabold text-3xl"> WorldAtlas </h1>
                </NavLink>
            </div>

            <nav className={`mr-[15%] max-[770px]:hidden ${show ? "max-[770px]:block! max-[770px]:absolute max-[770px]:top-24 max-[770px]:left-0 max-[770px]:w-full max-[770px]:bg-gray-800 max-[770px]:py-4 max-[770px]:z-50" : ""} `}>
                <ul className="flex max-[770px]:flex-col items-center gap-6">
                    <li className="hover:text-amber-700"> <NavLink to="/"> Home </NavLink> </li>
                    <li className="hover:text-amber-700"> <NavLink to="/about"> About </NavLink> </li>
                    <li className="hover:text-amber-700"> <NavLink to="/country"> Country </NavLink> </li>
                    <li className="hover:text-amber-700"> <NavLink to="/contact"> Contact </NavLink> </li>
                </ul>
            </nav>

            <div className="hidden max-[770px]:block mr-[15%] text-2xl">
                <button onClick={handleButtonToggle}>
                    <GiHamburgerMenu />
                </button>
            </div>
        </div>
    </header>
}