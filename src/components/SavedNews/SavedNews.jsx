import Header from "../Header/Header";
import "./SavedNews.css";

function SavedNews({ onLoginClick, onMenuClick, isMenuOpen }) {
  return (
    <>
      <Header
        onLoginClick={onLoginClick}
        onMenuClick={onMenuClick}
        isMenuOpen={isMenuOpen}
      />

      <main className="saved-news">
        <section className="saved-news__header">
          <p className="saved-news__subtitle">Saved articles</p>
          <h1 className="saved-news__title">
            Wahid, you have 5 saved articles
          </h1>
          <p className="saved-news__keywords">
            By keywords: <strong>Nature, Yellowstone, and 2 others</strong>
          </p>
        </section>
        <section className="saved-news__cards">
          {/* Saved cards will go here later */}
        </section>
      </main>
    </>
  );
}

export default SavedNews;
