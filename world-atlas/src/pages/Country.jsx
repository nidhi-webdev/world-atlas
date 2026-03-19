import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/api"
import { Loader } from "../components/ui/Loader"
import { CountryCard } from "./CountryCard"
import { SearchFilter } from "../components/ui/SearchFilter"



export const Country = () => {
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            setCountries(res.data)

        })
    }, [])

    if (isPending) return <Loader />


    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return true;

    }
    const filterRegion = (country) => {
        if (filter === "all") return true;
        return country.region === filter;
    }

    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))

    return <div className=" mt-10 px-[10%]">
        <SearchFilter
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter} />

        <div className="grid grid-cols-4 gap-6">
            {filterCountries.map((countryData, index) => {
                return <CountryCard countryData={countryData} key={index} />
            })}
        </div>
    </div>
}