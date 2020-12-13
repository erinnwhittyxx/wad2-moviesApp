import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddToWatchListButton from '../components/buttons/addToWatchList'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.movies.filter( m => m.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Watch List"}
      action={movie => <AddToWatchListButton movie={movie} />}
    />
  );
};

export default WatchListPage;