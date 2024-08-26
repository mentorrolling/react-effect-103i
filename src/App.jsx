import React, { useEffect, useState } from "react";
import { getNews } from "./helpers/apiFetch";
import CardApp from "./components/CardApp";

const App = () => {
  const [news, setNews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    //hacer la petición de noticias
    fetchNews();
  }, [inputValue]);

  const fetchNews = () => {
    getNews(inputValue).then((response) => {
      console.log(response);
      if (response.status === "ok") {
        const { articles } = response;
        setNews(articles);
      } else {
        setMessage(response.message);
      }
      setLoading(false);
    });
  };

  //Para el onSubmit del formulario si lo queremos hacer asi.
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetchNews();
  // };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <h1 className="fw-bold">Noticias</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 mb-3">
          <form>
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
        </div>
      </div>

      {loading ? (
        <h3 className="text-center">Cargando...</h3>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {news?.map((noticia, index) => (
            <CardApp key={index} noticia={noticia} />
          ))}
        </div>
      )}
      {message && (
        <div className="row mt-5">
          <div className="col">
            <h3>{message}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
