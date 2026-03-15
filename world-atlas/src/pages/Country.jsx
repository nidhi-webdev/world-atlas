import { useEffect, useTransition } from "react"
import { getCountryData } from "../api/api"



export const Country = () => {
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            console.log("Resonse", res);
            
        })
    }, [])

    if (isPending) return <Loader />
    return <div></div>
}