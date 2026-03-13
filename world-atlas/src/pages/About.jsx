import { countryData } from "../api/CountryData.js"

export const About = () => {
    return <div className=" mt-10 px-[10%]">
        <h2 className="font-extrabold text-2xl text-center"> Here are the Interesting Facts  </h2>
        <p className="font-extrabold text-2xl text-center mb-8"> we're proud of </p>
        <div className="grid grid-cols-3 gap-6 ">
            {countryData.map((country) => {
                const { id, countryname, capital, population, interestingfacts } = country
                return <>
                    <div className="flex bg-gray-700 rounded-xl p-6 flex-col gap-3 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer " key={id}>
                        <h3 className="font-extrabold text-xl text-white border-b border-gray-500 pb-2">{countryname} </h3>
                        <p className="text-white font-semibold"><span> Capital: {capital} </span></p>
                        <p className="text-white font-semibold"><span> Population: {population} </span></p>
                        <p className="text-white font-semibold"><span> Interesting Facts: {interestingfacts} </span></p>
                    </div>

                </>
            })
            }
        </div>


    </div>
}