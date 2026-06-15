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
  const [searchError, setSearchError] = useState("");

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSearch = (keyword) => {
    setIsLoading(true);
    setHasSearched(true);
    setSearchError("");

    getNews(keyword)
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch(() => {
        setSearchError(
          "Sorry, something went wrong during the request. Please try again later.",
        );
        setArticles([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
              articles={articles}
              isLoading={isLoading}
              hasSearched={hasSearched}
              searchError={searchError}
            />
          }
        />

        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
