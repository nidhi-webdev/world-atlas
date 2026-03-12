import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError()
    console.log("Error in the page", error);

    return <div className="flex justify-center items-center min-h-screen">
        <h1> Opps! An error occurred </h1>
        {error && <p> {error.data}</p>}
    </div>
}