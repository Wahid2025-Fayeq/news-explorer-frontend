import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import { authorize, register, checkToken } from "../../utils/auth";
import SavedNews from "../SavedNews/SavedNews";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import LoginModal from "../LoginModal/LoginModal";
import { getNews } from "../../utils/newsApi";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
} from "../../utils/MainApi";
import "./App.css";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      setIsAuthChecked(true);
      return;
    }

    checkToken(token)
      .then((userData) => {
        setIsLoggedin(true);
        setCurrentUser(userData);
        return getSavedArticles();
      })
      .then((savedArticlesData) => {
        setSavedArticles(savedArticlesData);
      })
      .catch(() => {
        localStorage.removeItem("jwt");
        setIsLoggedin(false);
        setCurrentUser(null);
        setSavedArticles([]);
      })
      .finally(() => {
        setIsAuthChecked(true);
      });
  }, []);

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
    setCurrentKeyword(keyword);
    setIsLoading(true);
    setError("");
    setHasSearched(true);
    setVisibleCards(3);

    getNews(keyword)
      .then((data) => {
        const articlesWithKeyword = (data.articles || []).map((article) => ({
          ...article,
          keyword,
        }));

        setArticles(articlesWithKeyword);
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
    return authorize({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return checkToken(data.token);
      })
      .then((userData) => {
        setIsLoggedin(true);
        setCurrentUser(userData);
        return getSavedArticles();
      })
      .then((savedArticlesData) => {
        setSavedArticles(savedArticlesData);
        closeModal();
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });
  };

  const handleRegister = ({ email, password, name }) => {
    return register({ email, password, name })
      .then(() => {
        setActiveModal("success");
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedin(false);
    setCurrentUser(null);
    setSavedArticles([]);
  };

  const handleSaveArticle = (article) => {
    saveArticle(article)
      .then((newArticle) => {
        setSavedArticles((state) => [newArticle, ...state]);
      })
      .catch(console.error);
  };

  const handleDeleteArticle = (articleId) => {
    deleteArticle(articleId)
      .then(() => {
        setSavedArticles((state) =>
          state.filter((article) => article._id !== articleId),
        );
      })
      .catch(console.error);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              onLogout={handleLogout}
              onSaveArticle={handleSaveArticle}
              onDeleteArticle={handleDeleteArticle}
              savedArticles={savedArticles}
              currentKeyword={currentKeyword}
            />
          }
        />

        <Route
          path="/saved-news"
          element={
            isAuthChecked && (
              <ProtectedRoute isLoggedin={isLoggedin}>
                <SavedNews
                  onLoginClick={handleLoginClick}
                  onMenuClick={handleMenuClick}
                  isMenuOpen={isMenuOpen}
                  onCloseMenu={onCloseMenu}
                  isLoggedin={isLoggedin}
                  onLogout={handleLogout}
                  onDeleteArticle={handleDeleteArticle}
                  savedArticles={savedArticles}
                />
              </ProtectedRoute>
            )
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
      <InfoTooltip
        isOpen={activeModal === "success"}
        onClose={closeModal}
        onLoginClick={() => {
          closeModal();
          handleLoginClick();
        }}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
