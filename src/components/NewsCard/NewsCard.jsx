import "./NewsCard.css";
import bookmarkIcon from "../../assets/bookmark.svg";
import trashIcon from "../../assets/trash.svg";

function NewsCard({
  card,
  onSaveArticle,
  isLoggedin,
  onDeleteArticle,
  savedArticles,
  onLoginClick,
  currentKeyword,
  isSavedPage,
}) {
  const savedArticle = savedArticles?.find(
    (article) => article.link === (card.url || card.link),
  );

  const isSaved = Boolean(savedArticle);

  const handleSaveClick = () => {
    if (!isLoggedin) {
      onLoginClick();
      return;
    }

    if (isSavedPage) {
      onDeleteArticle(savedArticle?._id || card._id);
      return;
    }
    if (isSaved) {
      onDeleteArticle(savedArticle?._id || card._id);
    } else {
      onSaveArticle(card);
    }
  };
  return (
    <article className="news-card">
      <div className="news-card__image-wrapper">
        <img
          src={card.urlToImage || card.image}
          alt={card.title || "News article"}
          className="news-card__image"
        />

        {card.keyword && (
          <span className="news-card__keyword">{card.keyword}</span>
        )}

        <button
          type="button"
          className={`news-card__save-button ${
            isSaved && !isSavedPage ? "news-card__save-button_saved" : ""
          }`}
          onClick={handleSaveClick}
        >
          <img
            src={isSavedPage ? trashIcon : bookmarkIcon}
            alt={isSavedPage ? "Delete article" : "Save article"}
            className="news-card__save-icon"
          />
        </button>
        {isSavedPage && (
          <div className="news-card__tooltip">Remove from saved</div>
        )}

        {!isLoggedin && !isSavedPage && (
          <div className="news-card__tooltip">Sign in to save articles</div>
        )}
      </div>

      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(card.publishedAt || card.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <h3 className="news-card__title">
          {card.title || "No title available"}
        </h3>

        <p className="news-card__description">
          {card.description || card.text || "No description available"}
        </p>

        <p className="news-card__source">
          {card.source?.name || card.source || "Unknown Source"}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;
