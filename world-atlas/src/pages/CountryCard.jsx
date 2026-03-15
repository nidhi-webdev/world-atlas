export const CountryCard = ({ countryData }) => {
    const { capital, flags, name, population, region, } = countryData

    return <div className="bg-gray-900 flex flex-col shadow-lg rounded-xl p-3 cursor-pointer hover:scale-105 transition-transform duration-300  ">
        <img src={flags.png} alt={flags.alt} className="h-30" />
        <h1 className="font-bold text-xl mt-3"> {name.common} </h1>
        <p> <span className="text-gray-500 mt-3">Population: </span>  {population} </p>
        <p> <span className="text-gray-500 mt-3">Region: </span>  {region} </p>
        <p> <span className="text-gray-500 mt-3"> Capital: </span> {capital}  </p>
    </div>
}