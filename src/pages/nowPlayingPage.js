import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getPlayingMovies} from "../api/tmdb-api";
import AddToWatchListButton from '../components/buttons/addToWatchList'

const NowPlayingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getPlayingMovies().then(movies => {
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

export default NowPlayingMoviesPage;