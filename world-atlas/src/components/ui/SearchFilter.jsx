export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)


    }

    const handleSearchChange = (e) => {
        e.preventDefault()
        setFilter(e.target.value)
    }

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
        })
    }

    return <div className="flex justify-between mb-10 items-center">

        <input
            type="text"
            value={search || ""}
            placeholder="Search"
            onChange={handleSearch}
            className="border border-gray-600 px-4 py-2 rounded-2xl focus:outline-none" />

        <button onClick={() => sortCountries("asc")} className="bg-gray-600 px-4 py-2 rounded cursor-pointer"> Asc </button>
        <button onClick={() => sortCountries("desc")} className="bg-gray-600 px-4 py-2 rounded cursor-pointer"> Desc </button>


        <select value={filter || "all"} onChange={handleSearchChange}
            className="border border-gray-600 px-4 py-2 rounded focus:outline-none" >

            <option value="all" > All </option>
            <option value="Africa"> Africa </option>
            <option value="Americas"> Americas  </option>
            <option value="Asia"> Asia </option>
            <option value="Europe"> Europe </option>
            <option value="Oceania"> Oceania </option>
        </select>
    </div >

}