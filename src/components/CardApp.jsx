import React from "react";

const CardApp = ({ noticia }) => {
  //   console.log(props);
  //   const {noticia} = props
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={
            noticia.urlToImage
              ? noticia.urlToImage
              : "https://media.istockphoto.com/id/1409329028/es/vector/no-hay-imagen-disponible-marcador-de-posici%C3%B3n-miniatura-icono-dise%C3%B1o-de-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=Bd89b8CBr-IXx9mBbTidc-wu_gtIj8Py_EMr3hGGaPw="
          }
          className="card-img-top"
          alt={noticia.title}
        />
        <div className="card-body">
          <a className="nav-link" href={noticia.url} target="_blank">
            <h5 className="card-title">{noticia.title}</h5>
          </a>
          <p className="card-text">{noticia.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardApp;
