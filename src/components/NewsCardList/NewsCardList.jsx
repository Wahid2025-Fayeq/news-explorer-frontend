import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ cards, onShowMore, showMoreVisible }) {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>

      <div className="news-card-list__grid">
        {cards.map((card) => (
          <NewsCard key={card.title} card={card} />
        ))}
      </div>

      {showMoreVisible && (
        <button
          type="button"
          className="news-card-list__button"
          onClick={onShowMore}
        >
          Show More
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
