import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import { getNews } from "../../utils/newsApi";
import "./App.css";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSearch = (keyword) => {
    setIsLoading(true);
    setError("");
    setHasSearched(true);
    setVisibleCards(3);

    getNews(keyword)
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch(() => {
        setArticles([]);
        setError(
          "Sorry, something went wrong during the request. Please try again later.",
        );
      })

      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              onLoginClick={handleLoginClick}
              onSearch={handleSearch}
              articles={articles.slice(0, visibleCards)}
              isLoading={isLoading}
              hasSearched={hasSearched}
              onShowMore={handleShowMore}
              error={error}
              showMoreVisible={visibleCards < articles.length}
              onMenuClick={handleMenuClick}
              isMenuOpen={isMenuOpen}
            />
          }
        />

        <Route
          path="/saved-news"
          element={
            <SavedNews
              onLoginClick={handleLoginClick}
              onMenuClick={handleMenuClick}
              isMenuOpen={isMenuOpen}
            />
          }
        />
      </Routes>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
