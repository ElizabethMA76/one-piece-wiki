function SearchBar({ searchText, onSearchChange }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Buscar personaje..."
      value={searchText}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
}

export default SearchBar;