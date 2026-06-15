import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword.trim()) {
      setError("Please enter a keyword");
      return;
    }

    setError("");
    onSearch(keyword);
  };

  return (
    <section className="search">
      <div className="search__content">
        <h1 className="search__title">What's going on in the world?</h1>
        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <form className="search__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search__input"
            placeholder="Enter topic"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setError("");
            }}
          />

          <button className="search__button" type="submit">
            Search
          </button>
        </form>

        {error && <span className="search__error">{error}</span>}
      </div>
    </section>
  );
}

export default SearchForm;
