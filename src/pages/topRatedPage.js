import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getTopRated} from "../api/tmdb-api";
import ViewSimilarMovies from '../components/buttons/viewSimilar';

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
        return <ViewSimilarMovies movie={movie} />;
      }}
    />
  );
};

export default TopRatedMoviesPage;