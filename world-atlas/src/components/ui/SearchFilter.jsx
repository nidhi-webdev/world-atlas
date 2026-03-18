export const SearchFilter = ({ search, setSearch, filter, setFilter }) => {

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log("Types Value", e.target.value);

    }

    return <div>
        <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={handleSearch} />

        <div>
            <select>
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