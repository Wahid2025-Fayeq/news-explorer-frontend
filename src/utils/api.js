export const getItems = () => {
  return new Promise((resolve) => {
    resolve([]);
  });
};

export const saveArticle = (article) => {
  return new Promise((resolve) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      keyword: article.keyword || "",
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source?.name,
      link: article.url,
      image: article.urlToImage,
    });
  });
};

export const deleteArticle = (articleId) => {
  return new Promise((resolve) => {
    resolve({
      message: "Article deleted",
      _id: articleId,
    });
  });
};
