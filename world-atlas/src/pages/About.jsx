import { countryData } from "../api/CountryData.js"

export const About = () => {
    return <div>
        <div>
            <h2> Here are the Interesting Facts <br /> we're proud of </h2>

        </div>
        <div>
            <p>India </p>
            <p><span> Capital: Delhi </span></p>
            <p><span> Population: Delhi </span></p>
            <p><span> Interesting Facts: Delhi </span></p>
        </div>

        {countryData.map((country) => {
            const{id, countryname, capital, population, interestingfacts} = country
            return <>
                <div key={id}>
                    <h2> Here are the Interesting Facts <br /> we're proud of </h2>

                </div>
                <div>
                    <p>{countryname} </p>
                    <p><span> Capital: {capital} </span></p>
                    <p><span> Population: {population} </span></p>
                    <p><span> Interesting Facts: {interestingfacts} </span></p>
                </div>
            </>
        })
        }
    </div>
}