import { newsCards } from "../../utils/constants";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList() {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>

      <div className="news-card-list__grid">
        {newsCards.map((card) => (
          <NewsCard key={card.title} card={card} />
        ))}
      </div>

      <button type="button" className="news-card-list__button">
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;
