import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__content">
        <h1 className="search__title">What's going on in the world?</h1>
        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <form className="search__form">
          <input
            type="text"
            className="search__input"
            placeholder="Enter topic"
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
