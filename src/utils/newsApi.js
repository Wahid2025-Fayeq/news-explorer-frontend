const newsApiBaseUrl =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const getDate = (daysAgo = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split("T")[0];
};

const _checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const getNews = (keyword) => {
  const url = new URL(newsApiBaseUrl);

  url.searchParams.set("q", keyword);
  url.searchParams.set("apiKey", apiKey);
  url.searchParams.set("from", getDate(7));
  url.searchParams.set("to", getDate());
  url.searchParams.set("pageSize", 100);

  return fetch(url).then(_checkResponse);
};
