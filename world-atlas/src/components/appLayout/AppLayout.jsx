import { Headers } from "../ui/Hearder"
import { Footer } from "../ui/Footer"
import { Outlet } from "react-router-dom"



export const AppLayout = () => {
    return <>
        <Headers />
        <Outlet />
        <Footer />
    </>
}