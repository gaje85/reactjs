import {v4 as uuidV4} from 'uuid';
import {configureStore, createSlice, createAsyncThunk} from '@reduxjs/toolkit';

/*
 * Declaring the initial global app state
 **/
const INITIAL_MOVIE_STATE = [{
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

const INITIAL_USER_STATE = [];

const movieSlice = createSlice({
  name: "movies",
  initialState: INITIAL_MOVIE_STATE,
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

const getUsersAsync = createAsyncThunk("users/getUsers", (dispatch, getState) => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
});

const usersSlice = createSlice({
  name: "user",
  initialState: INITIAL_USER_STATE,
  reducers: {
    clearUsers: (users, action) => {
      users = [];
      return users;
    }
  },
  extraReducers: builder => {
    builder.addCase(getUsersAsync.fulfilled, (users, action) => {
      console.log("State in extraReducers - ", action.payload);
      users = action.payload;
      return users;
    })
  }
});
const {addMovie, toggleMovieWatchedStatus} = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

const usersReducer = usersSlice.reducer;

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    users: usersReducer
  }
});

export default store;
export {
  addMovie,
  toggleMovieWatchedStatus,
  getUsersAsync
}
