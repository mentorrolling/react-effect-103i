let url =
  "https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=452d00247570407f893864ae69119af9&q=";

export const getNews = async (termino) => {
  try {
    const response = await fetch(url + termino);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se realizó la petición por error de la url");
  }
};
