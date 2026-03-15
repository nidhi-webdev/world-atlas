import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/api"
import { Loader } from "../components/ui/Loader"



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

    return <div className="grid grid-cols-4">
        {countries.map((curdata, index) => {
            console.log("countries", countries);

            const { capital, flags, name, population, region, } = curdata

            return <>
                <div key={index}> <h1 className="text-white"> {capital}  </h1>

                </div>
            </>
        })}
    </div>
}