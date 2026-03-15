import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})

export const getCountryData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            api.get("/all?fields=name,population,region,capital,flags")
                .then(resolve)
                .catch(reject)
        }, 5000)
    })
}