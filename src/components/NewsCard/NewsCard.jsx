import "./NewsCard.css";
import bookmarktIcon from "../../assets/bookmark.svg";

function NewsCard({ card }) {
  return (
    <article className="news-card">
      <div className="news-card__image-wrapper">
        <img
          src={card.urlToImage}
          alt={card.title}
          className="news-card__image"
        />

        <button type="button" className="news-card__save-button">
          <img
            src={bookmarktIcon}
            alt="Save article"
            className="news-card__save-icon"
          />
        </button>
      </div>

      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(card.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <h3 className="news-card__title">{card.title}</h3>

        <p className="news-card__description">{card.description}</p>

        <p className="news-card__source">{card.source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
