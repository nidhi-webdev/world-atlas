import { useParams } from "react-router-dom"
import { useEffect, useState, useTransition } from "react"
import { Loader } from "../ui/Loader"
import { getConInvData } from "../../api/api"



export const CountryDetails = () => {
    const params = useParams()

    const [isPending, startTransition] = useTransition()
    const [countrie, setCountrie] = useState([])

    useEffect(() => {
        startTransition(async () => {
            const res = await getConInvData(params.id)
            console.log("Country Details", res);
            
            setCountrie(res.data)

        })
    }, [])

    if (isPending) return <Loader />


    return <h1> HAllo {params.id} </h1>
}