const BASE_URL = "https://mine.bz.jumpingcrab.com/api";

const checkResponse = async (res) => {
  const data = await res.json();

  if (res.ok) {
    return data;
  }

  return Promise.reject(data);
};

const getToken = () => localStorage.getItem("jwt");

export const getSavedArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
};

export const saveArticle = (article) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      keyword: article.keyword || "news",
      title: article.title || "No title available",
      text: article.description || article.text || "No description available",
      date: article.publishedAt || article.date || new Date().toISOString(),
      source: article.source?.name || article.source || "Unknown Source",
      link: article.url || article.link || "https://example.com",
      image:
        article.urlToImage ||
        article.image ||
        "https://placehold.co/600x400.png",
    }),
  }).then(checkResponse);
};

export const deleteArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
};
