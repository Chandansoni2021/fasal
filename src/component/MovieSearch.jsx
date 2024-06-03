import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get(`/api/movies/search?query=${query}`, {
      headers: {
        Authorization: token,
      },
    });
    setMovies(res.data.Search);
  };

  return (
    <div>
      <h3>Search Movies</h3>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
