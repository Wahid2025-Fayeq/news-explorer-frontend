import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import { authorize, register } from "../../utils/auth";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import { getNews } from "../../utils/newsApi";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLoginClick = () => {
    setActiveModal("login");
    setIsMenuOpen(false);
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
    setIsMenuOpen(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setActiveModal("");
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

  const handleLogin = ({ email, password }) => {
    authorize({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedin(true);
        closeModal();
      })
      .catch(console.error);
  };

  const handleRegister = ({ email, password, name }) => {
    register({ email, password, name })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch(console.error);
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
              onCloseMenu={onCloseMenu}
              isMenuOpen={isMenuOpen}
              isLoggedin={isLoggedin}
            />
          }
        />

        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedin={isLoggedin}>
              <SavedNews
                onLoginClick={handleLoginClick}
                onMenuClick={handleMenuClick}
                isMenuOpen={isMenuOpen}
                onCloseMenu={onCloseMenu}
                isLoggedin={isLoggedin}
              />
            </ProtectedRoute>
          }
        />
      </Routes>

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        onRegisterClick={handleRegisterClick}
        onLogin={handleLogin}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeModal}
        onLoginClick={handleLoginClick}
        onRegister={handleRegister}
      />
    </>
  );
}

export default App;
