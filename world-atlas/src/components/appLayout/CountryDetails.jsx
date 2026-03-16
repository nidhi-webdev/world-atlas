import { useParams } from "react-router-dom"

export const CountryDetails = () => {
  const params =   useParams()
  console.log("param", params);
  return <h1> HAllo {params.id} </h1>
}