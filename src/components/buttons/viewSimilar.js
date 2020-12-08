import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const ViewSimilarMovies = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleViewSimilarMovies = e => {
    e.preventDefault();
    context.viewSimilar(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleViewSimilarMovies}
    >
      View Similar Movies
    </button>
  );
};

export default ViewSimilarMovies;