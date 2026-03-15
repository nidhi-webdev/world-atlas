import { useEffect, useTransition } from "react"
import { getCountryData } from "../api/api"
import { Loader } from "../components/ui/Loader"



export const Country = () => {
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            console.log("Resonse", res.data);

        })
    }, [])

    if (isPending) return <Loader />

    return <div className="grid grid-cols-4">

    </div>
}