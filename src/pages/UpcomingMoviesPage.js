import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import {getUpcomingMovies} from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getUpcomingMovies().then(movies => {
        setMovies(movies);
        });
    }, []);

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies} 
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;