import { useContext } from "react";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./SavedNews.css";

function SavedNews({
  onLoginClick,
  onMenuClick,
  isMenuOpen,
  isLoggedin,
  onCloseMenu,
  onLogout,
  savedArticles,
  onDeleteArticle,
}) {
  const currentUser = useContext(CurrentUserContext);

  const keywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ];

  const keywordsText =
    keywords.length > 3
      ? `${keywords.slice(0, 2).join(", ")}, and ${keywords.length - 2} others`
      : keywords.join(", ");

  return (
    <>
      <Header
        onLoginClick={onLoginClick}
        onMenuClick={onMenuClick}
        isMenuOpen={isMenuOpen}
        isSavedNews
        onCloseMenu={onCloseMenu}
        isLoggedin={isLoggedin}
        onLogout={onLogout}
      />

      <main className="saved-news">
        <section className="saved-news__header">
          <p className="saved-news__subtitle">Saved articles</p>

          <h1 className="saved-news__title">
            {currentUser?.name || "User"}, you have {savedArticles.length} saved{" "}
            {savedArticles.length === 1 ? "article" : "articles"}
          </h1>

          {savedArticles.length > 0 && (
            <p className="saved-news__keywords">
              By keywords: <strong>{keywordsText}</strong>
            </p>
          )}
        </section>

        <section className="saved-news__cards">
          {savedArticles.map((card) => (
            <NewsCard
              key={card._id}
              card={card}
              isLoggedin={isLoggedin}
              savedArticles={savedArticles}
              onDeleteArticle={onDeleteArticle}
              onSaveArticle={() => {}}
              onLoginClick={onLoginClick}
              isSavedPage
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default SavedNews;
