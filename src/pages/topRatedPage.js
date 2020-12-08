import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getTopRated} from "../api/tmdb-api";
import AddToWatchListButton from '../components/buttons/addToWatchList'

const TopRatedMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTopRated().then(movies => {
        setMovies(movies);
        });
    }, []);

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default TopRatedMoviesPage;