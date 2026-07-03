import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import heroImage from "../../assets/hero-background.png";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import notFoundIcon from "../../assets/not-found.svg";
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
  onCloseMenu,
  isModalOpen,
  isLoggedin,
  onLogout,
  onSaveArticle,
  onDeleteArticle,
  savedArticles,
  currentKeyword,
}) {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Header
          onLoginClick={onLoginClick}
          onMenuClick={onMenuClick}
          isMenuOpen={isMenuOpen}
          isModalOpen={isModalOpen}
          onCloseMenu={onCloseMenu}
          isLoggedin={isLoggedin}
          onLogout={onLogout}
          isModalOpen={isModalOpen}
        />
        <SearchForm onSearch={onSearch} />
      </section>

      {isLoading && <Preloader />}

      {!isLoading && error && (
        <section className="search-results">
          <p>{error}</p>
        </section>
      )}

      {!isLoading && hasSearched && !error && articles.length === 0 && (
        <section className="search-results search-results_type_not-found">
          <img
            src={notFoundIcon}
            alt="Not found"
            className="search-results__icon"
          />
          <h2 className="search-results__not-found-title">Nothing found</h2>
          <p className="search-results__not-found-text">
            Sorry, but nothing matched your search term.
          </p>
        </section>
      )}

      {!isLoading && hasSearched && !error && articles.length > 0 && (
        <section className="search-results">
          <NewsCardList
            cards={articles}
            onShowMore={onShowMore}
            showMoreVisible={showMoreVisible}
            onSaveArticle={onSaveArticle}
            onDeleteArticle={onDeleteArticle}
            savedArticles={savedArticles}
            isLoggedin={isLoggedin}
            onLoginClick={onLoginClick}
          />
        </section>
      )}

      <About />
      <Footer />
    </>
  );
}

export default Main;
