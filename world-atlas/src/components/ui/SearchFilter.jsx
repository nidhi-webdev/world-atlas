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
    </div>
}