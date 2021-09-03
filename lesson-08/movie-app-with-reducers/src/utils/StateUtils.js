import {v4 as uuidV4} from 'uuid';

/*
* These are the various possible actions that you are going to perform
* on your state
**/

const ACTIONS = {
  ADD_MOVIE: "ADD_MOVIE",
  TOGGLE_MOVIE_WATCHED_STATUS: "TOGGLE_MOVIE_WATCHED_STATUS"
};

/*
* Declaring the initial global app state
**/
const INITIAL_APP_STATE = {
  movies: [{
    id: uuidV4(),
    name: "Toy Story",
    year: "1995",
    watched: false
  }, {
    id: uuidV4(),
    name: "Toy Story 2",
    year: "1999",
    watched: false
  }, {
    id: uuidV4(),
    name: "Toy Story 3",
    year: "2010",
    watched: false
  }]
};

const moviesReducer = (state, action) => {
  console.log("Reducer called - ", state);
  console.log("Reducer called - ", action);
  switch (action.type) {
    case ACTIONS.ADD_MOVIE:
      return {
        movies: [{id: uuidV4(), ...action.payload},...state.movies]
      };

    case ACTIONS.TOGGLE_MOVIE_WATCHED_STATUS:
      const movies = state.movies;

      const updatedMovies = movies.map(movie => {
        if(movie.id === action.payload.id) {
          return {
            ...movie,
            watched: !movie.watched
          };
        }

        return movie;
      });

      return  {
        movies: updatedMovies
      };
  }
};

export {
  ACTIONS,
  INITIAL_APP_STATE,
  moviesReducer
}

