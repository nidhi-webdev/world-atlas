import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/api"
import { Loader } from "../components/ui/Loader"
import { CountryCard } from "./CountryCard"



export const Country = () => {
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([])

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            setCountries(res.data)

        })
    }, [])

    if (isPending) return <Loader />

    return <div className=" mt-10 px-[10%]">
        <div className="grid grid-cols-4 gap-6">
            {countries.map((countryData, index) => {
                return <CountryCard countryData={countryData} key={index}  />
            })}
        </div>
    </div>
}