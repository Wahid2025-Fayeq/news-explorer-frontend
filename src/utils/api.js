const BASE_URL = "https://mine.bz.jumpingcrab.com/api";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
};

export const getItems = (token) => {
  return fetch(`${BASE_URL}/articles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const saveArticle = (article, keyword, token) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source?.name,
      link: article.url,
      image: article.urlToImage,
    }),
  }).then(checkResponse);
};

export const deleteArticle = (articleId, token) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
