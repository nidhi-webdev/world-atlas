import { FaLongArrowAltRight } from "react-icons/fa"
import { NavLink } from "react-router-dom"



export const CountryCard = ({ countryData }) => {
    const { capital, flags, name, population, region, } = countryData

    return <div className="bg-gray-900 flex flex-col shadow-lg rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform duration-300  ">
        <img src={flags.png} alt={flags.alt} className="h-30" />
        <h1 className="font-bold text-xl mt-3"> {name.common.length > 20 ? name.common.slice(0, 20) + "....." : name.common} </h1>
        <p> <span className="text-gray-500 mt-3">Population: </span>  {population} </p>
        <p> <span className="text-gray-500 mt-3">Region: </span>  {region} </p>
        <p> <span className="text-gray-500 mt-3"> Capital: </span> {capital}  </p>
        <NavLink to="">
            <button className="flex items-center gap-3 border border-gray-600 mt-5 px-4 py-2 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/30 cursor-pointer"> Read More <FaLongArrowAltRight /></button>
        </NavLink>
    </div>
}