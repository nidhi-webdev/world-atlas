import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError()
    console.log("Error in the page", error);

    return <div className="flex flex-col justify-center items-center min-h-screen gap-5">
        <h1> Opps! An error occurred </h1>
        {error && <p> {error.data}</p>}
        <NavLink to="/" className="px-4 py2 bg-gray-600 flex flex-col justify-center rounded"> Go Home </NavLink>
    </div>
}