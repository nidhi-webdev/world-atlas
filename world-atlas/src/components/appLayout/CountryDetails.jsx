import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState, useTransition } from "react"
import { Loader } from "../ui/Loader"
import { getConInvData } from "../../api/api"



export const CountryDetails = () => {
    const params = useParams()

    const [isPending, startTransition] = useTransition()
    const [country, setCountry] = useState([])

    useEffect(() => {
        startTransition(async () => {
            const res = await getConInvData(params.id)
            console.log("Country Details", res);
            if (res.status === 200) {
                setCountry(res.data[0])
            }

        })
    }, [])

    if (isPending) return <Loader />

    if (!country || !country.name) return null

    return (
        <div className="min-h-screen px-[10%] py-16 bg-[linear-gradient(71deg,#080509,#1a171c,#080509)]">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <img src={country.flags?.png} alt={country.flags?.alt}
                    className="w-72 rounded-xl shadow-lg border border-gray-700" />

                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-extrabold text-white">{country.name?.common}</h1>
                    <p className="text-gray-400"><span className="text-white font-semibold">Official Name: </span>{country.name?.official}</p>
                    <p className="text-gray-400"><span className="text-white font-semibold">Capital: </span>{country.capital?.[0]}</p>
                    <p className="text-gray-400"><span className="text-white font-semibold">Population: </span>{country.population?.toLocaleString()}</p>
                    <p className="text-gray-400"><span className="text-white font-semibold">Region: </span>{country.region}</p>
                    <p className="text-gray-400"><span className="text-white font-semibold">Sub Region: </span>{country.subregion}</p>
                    <p className="text-gray-400"><span className="text-white font-semibold">Top Level Domain: </span>{country.tld?.[0]}</p>
                    <p className="text-gray-400"><span className="text-white font-semibold">Languages: </span>{Object.values(country.languages || {}).join(", ")}</p>
                    <p className="text-gray-400"><span className="text-white font-semibold">Currencies: </span>
                        {Object.values(country.currencies || {}).map(c => c.name).join(", ")}
                    </p>
                </div>
            </div>
            <NavLink to="/country">
                <button className=""> Go Back </button>
            </NavLink>

        </div>
    )
}