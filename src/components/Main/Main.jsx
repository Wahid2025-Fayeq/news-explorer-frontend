import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import heroImage from "../../assets/hero-background.png";
import "./Main.css";

function Main() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Header />
        <SearchForm />
      </section>

      <About />
      <Footer />
    </>
  );
}

export default Main;
