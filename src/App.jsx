import React, { useEffect, useState } from "react";
import { getNews } from "./helpers/apiFetch";

const App = () => {
  const [news, setNews] = useState([]);
  const nombre = "Pablo";

  useEffect(() => {
    //hacer la petición de noticias
    getNews().then((response) => {
      const { articles } = response;
      setNews(articles);
    });
  }, []);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <h1 className="fw-bold">Noticias</h1>
          <ul>
            {news.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default App;
