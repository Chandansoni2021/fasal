// fetchMovies.js
const API_KEY = '3638aa27';

const fetchMovies = async (searchTerm) => {
  const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
  const response = await fetch(URL);
  const finaldata = await response.json();
  return finaldata.Search.map(movie => ({
    title: movie.Title,
    year: movie.Year,
    imdbID: movie.imdbID,
    poster: movie.Poster,
  }));
};

export default fetchMovies;
