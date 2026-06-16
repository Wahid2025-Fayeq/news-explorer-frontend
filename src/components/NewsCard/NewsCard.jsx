import "./NewsCard.css";
import bookmarkIcon from "../../assets/bookmark.svg";

function NewsCard({ card }) {
  return (
    <article className="news-card">
      <div className="news-card__image-wrapper">
        <img
          src={card.urlToImage}
          alt={card.title || "News article"}
          className="news-card__image"
        />

        <button type="button" className="news-card__save-button">
          <img
            src={bookmarkIcon}
            alt="Save article"
            className="news-card__save-icon"
          />
        </button>

        <div className="news-card__tooltip">Sign in to save articles</div>
      </div>

      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(card.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <h3 className="news-card__title">
          {card.title || "No title available"}
        </h3>

        <p className="news-card__description">
          {card.description || "No description available"}
        </p>

        <p className="news-card__source">
          {card.source?.name || "Unknown Source"}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;
