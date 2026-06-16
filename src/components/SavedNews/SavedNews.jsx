import Header from "../Header/Header";

function SavedNews() {
  return (
    <>
      <Header />

      <main className="saved-news">
        <h1 className="saved-news__title">Saved articles</h1>
        <p className="saved-news__text">
          This page will display saved articles.
        </p>
      </main>
    </>
  );
}

export default SavedNews;
