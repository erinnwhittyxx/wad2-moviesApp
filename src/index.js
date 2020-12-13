import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage' 
import UpcomingMoviesPage from './pages/UpcomingMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import nowPlayingPage from "./pages/nowPlayingPage";
import topRatedPage from "./pages/topRatedPage";
import WatchlistPage from "./pages/watchlistPage";

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader />   
      <div className="container-fluid">
        <MoviesContextProvider>
          <GenresContextProvider> 
            <Switch>
              <Route exact path="/movies/watchlist" component={WatchlistPage} />
              <Route exact path="/movies/top_rated" component={topRatedPage} />
              <Route exact path="/movies/now_playing" component={nowPlayingPage} />
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </GenresContextProvider> 
        </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));