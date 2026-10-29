
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchContext } from "../../context/SearchContextValue";

const Search = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for phones..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button aria-label="Search">
        <FiSearch />
      </button>
    </div>
  );
};

export default Search;
