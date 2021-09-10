/*
 * Declaring the initial global app state
 **/
import {v4 as uuidV4} from 'uuid';
import {configureStore, createSlice} from '@reduxjs/toolkit';

const INITIAL_APP_STATE = [{
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
}];

const movieSlice = createSlice({
  name: "movies",
  initialState: INITIAL_APP_STATE,
  reducers: {
    addMovie: (movies, action) => {
      movies.unshift({
        id: uuidV4(),
        ...action.payload
      });
      return movies;
    },
    toggleMovieWatchedStatus: (movies, action) => {
      const idx = movies.findIndex(movie => movie.id === action.payload.id);
      movies[idx].watched = !movies[idx].watched;
      return movies;
    }

  }
});

const {addMovie, toggleMovieWatchedStatus} = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});

export default store;
export {
  addMovie,
  toggleMovieWatchedStatus
}
