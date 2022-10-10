import React from "react";
import { FcSearch } from "react-icons/fc";
import { useGlobalContext } from "../contexts/context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault}>
      <h2>Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit" className="submit-btn">
        <FcSearch />
      </button>
    </form>
  );
};

export default SearchForm;
