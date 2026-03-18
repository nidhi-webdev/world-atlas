export const SearchFilter = ({ search, setSearch, filter, setFilter }) => {

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)


    }

    const handleSearchChange = (e) => {
        e.preventDefault()
        setFilter(e.target.value)
    }

    return <div>
        <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={handleSearch} />

        <div>
            <select value={filter} onChange={handleSearchChange}>
                <option value="all" ></option>
                <option value="Africa"> Africa </option>
                <option value="Americas"> Americas  </option>
                <option value="Asia"> Asia </option>
                <option value="Europe"> Europe </option>
                <option value="Oceania"> Oceania </option>
            </select>
        </div>
    </div>
}