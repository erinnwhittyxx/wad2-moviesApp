import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getSimilarMovies} from "../api/tmdb-api";
import AddToWatchListButton from '../components/buttons/addToWatchList'

const SimilarMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getSimilarMovies().then(movies => {
        setMovies(movies);
        });
    }, []);

  return (
    <PageTemplate
      title="Now Playing"
      movies={movies}
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default SimilarMoviesPage;