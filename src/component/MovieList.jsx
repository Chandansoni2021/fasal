import React from 'react';

const MovieList = ({ list, addToFavorites }) => {
  return (
    <div>
      <h3>{list.name}</h3>
      <ul className="movie-list">
        {list.movies.map((movie) => (
          <li key={movie.imdbID} className="movie-item">
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: '100px', height: '150px' }}
            />
            {addToFavorites && (
              <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
