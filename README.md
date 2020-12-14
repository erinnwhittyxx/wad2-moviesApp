# Assignment 1 - ReactJS app.

Name: Erinn Whitty

## Features.
 
 + Top Rated page - a new page to show the movies with the highest ratings
 + Now Playing page - a page to show movies that are currently playing/popular
 + Ratings = added rating to the movie details 
 + Credits = allows the user to view credits(cast) under each movie
 + Attempted Watchlist page/button = wanted to allow user to add movies to a watchlist and view it on a new page
 + Attempted Similar Movies page/button = when the user clicked on the button I wanted them to be redirected to a page full of similar movies

## Setup requirements (If required).

N/A

## API Data Model.

+ https://api.themoviedb.org/3/movie/now_playing - get movies that are now playing. 
+ https://api.themoviedb.org/3/movie/top_rated - get movies that have the highest rating.
+ https://api.themoviedb.org/3/movie/${id}/credits - get movie credits.
+ https://api.themoviedb.org/3/movie/${id}/similar - *attemtped* get similar movies.
+ https://api.themoviedb.org/3/movie/${id} - used to get vote_average(rating) for movie details

## App Design.

### Component catalogue (If required).

![][stories]

### UI Design.

![][upcoming]
>Shows pages of upcoming movies.

![][toprated]
>Shows pages of movies with the highest ratings.

![][nowplaying]
>Shows pages of now playing/popular movies

![][watchlist]
>Page of movies added to the watchlist *incomplete*  

## Routing.

+ /movies/now_playing - displays now playing movies.
+ /movies/top_rated - displays movies with highest ratings 
+ /movies/watchlist - *incomplete*

### Data hyperlinking.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][tabLinks]
>Clicking any one of the tabs will display a different page of movies etc.

## Independent learning (If relevant).

https://developers.themoviedb.org/3/getting-started/introduction

---------------------------------

[tabLinks]: ./public/tablinks.JPG
[reviewLink]: ./public/reviewlink.png
[cardLink]: ./public/cardlink.JPG
[nowplaying]: ./public/nowplaying.JPG
[toprated]: ./public/toprated.JPG
[upcoming]: ./public/upcoming.JPG
[stories]: ./public/storybook.png
[watchlist]: ./public/watchlist.JPG