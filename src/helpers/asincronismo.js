//Asincronismo
//Promesas || Promise
// let isActive = true;
// function asincronica() {
//   console.log("Cargando...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve("El servicio está activo");
//       } else {
//         reject("No se pudo acceder");
//       }

//       console.log("Carga finalizada");
//     }, 3000);
//   });
// }

// asincronica()
//   .then((respuesta) => console.log(respuesta))
//   .catch((error) => console.error(error));

let url =
  "https://newsapi.or/v2/top-headlines?country=ar&category=technology&apiKey=452d00247570407f893864ae69119af9";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//async await

const getNews = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se realizó la petición por error de la url");
  }
};

getNews()
  .then((respuesta) => console.log(respuesta))
  .catch((error) => {
    alert(error);
  });
