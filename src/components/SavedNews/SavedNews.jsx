import { useContext } from "react";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";
import Footer from "../Footer/Footer";
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
  isModalOpen,
}) {
  const currentUser = useContext(CurrentUserContext);

  const keywordCounts = savedArticles.reduce((counts, article) => {
    counts[article.keyword] = (counts[article.keyword] || 0) + 1;
    return counts;
  }, {});

  const keywords = Object.keys(keywordCounts).sort(
    (a, b) => keywordCounts[b] - keywordCounts[a],
  );

  const keywordsText =
    keywords.length > 3
      ? `${keywords.slice(0, 2).join(", ")}, and ${keywords.length - 2} more`
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
        isModalOpen={isModalOpen}
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

      <Footer />
    </>
  );
}

export default SavedNews;
