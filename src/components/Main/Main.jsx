import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import heroImage from "../../assets/hero-background.png";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({ onLoginClick }) {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Header onLoginClick={onLoginClick} />
        <SearchForm />
      </section>

      <NewsCardList />

      <About />
      <Footer />
    </>
  );
}

export default Main;
