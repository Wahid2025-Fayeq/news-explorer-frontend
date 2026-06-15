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
  searchError,
}) {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Header onLoginClick={onLoginClick} />
        <SearchForm onSearch={onSearch} />
      </section>

      {isLoading && <Preloader />}

      {!isLoading && searchError && (
        <section className="search-results">
          <p>{searchError}</p>
        </section>
      )}

      {!isLoading && hasSearched && !searchError && articles.length > 0 && (
        <NewsCardList cards={articles} />
      )}

      <About />
      <Footer />
    </>
  );
}

export default Main;
