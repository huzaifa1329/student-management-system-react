import "../styles/SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search student by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;