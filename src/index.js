import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
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

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader />   
      <div className="container-fluid">
        <ul className="navbar-nav text-black">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/movies/favorites">
              Favorites
            </Link>
          </li>
        </ul>
        <MoviesContextProvider>
          <GenresContextProvider> 
            <Switch>
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