# Assignment 1 - ReactJS app.

Name: Erinn Whitty

## Features.
 
 + Upcoming Movies page - a page to show upcoming movies.
 + Top Rated page - a new page to show the movies with the highest ratings
 + Now Playing page - a page to show movies that are currently playing/popular
 + Ratings = added rating to the movie details 
 + Credits = allows the user to view credits(cast) under each movie
 + Attempted Watchlist page/button = wanted to allow user to add movies to a watchlist and view it on a new page
 + Attempted Similar Movies page/button = when the user clicked on the button I wanted them to be redirected to a page full of similar movies
 + Added MovieCredits to the Storybook UI.

## Setup requirements (If required).

N/A

## API Data Model.

+ https://api.themoviedb.org/3/movie/upcoming - get upcoming movies.
+ https://api.themoviedb.org/3/movie/now_playing - get movies that are now playing. 
+ https://api.themoviedb.org/3/movie/top_rated - get movies that have the highest rating.
+ https://api.themoviedb.org/3/movie/${id}/credits - get movie credits.
+ https://api.themoviedb.org/3/movie/${id}/similar - *attemtped* get similar movies.
+ https://api.themoviedb.org/3/movie/${id} - used to get vote_average(rating) for movie details

## App Design.

### Component catalogue (If required).



![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/now_playing - displays now playing movies.
+ /movies/top_rated - displays
+ /movies/watchlist - 

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
