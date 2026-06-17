import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import heroImage from "../../assets/hero-background.png";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main({
  onLoginClick,
  onSearch,
  articles,
  isLoading,
  hasSearched,
  error,
  onShowMore,
  showMoreVisible,
  onMenuClick,
  isMenuOpen,
}) {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Header onLoginClick={onLoginClick} onMenuClick={onMenuClick} isMenuOpen={isMenuOpen} />
        <SearchForm onSearch={onSearch} />
      </section>

      {isLoading && <Preloader />}

      {!isLoading && error && (
        <section className="search-results">
          <p>{error}</p>
        </section>
      )}

      {!isLoading && hasSearched && !error && articles.length === 0 && (
        <section className="search-results">
          <h2>Nothing found</h2>
          <p>Sorry, but nothing matched your search term.</p>
        </section>
      )}

      {!isLoading && hasSearched && !error && articles.length > 0 && (
        <section className="search-results">
          <NewsCardList
            cards={articles}
            onShowMore={onShowMore}
            showMoreVisible={showMoreVisible}
          />
        </section>
      )}

      <About />
      <Footer />
    </>
  );
}

export default Main;
