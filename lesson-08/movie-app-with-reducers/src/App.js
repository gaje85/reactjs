import './App.css';
import {useReducer} from 'react';
import {INITIAL_APP_STATE, ACTIONS, moviesReducer} from './utils/StateUtils';
import MovieDisplay from './components/MovieDisplay';
import MovieInput from './components/MovieInput';

function App() {
  const [state, dispatcher] = useReducer(moviesReducer, INITIAL_APP_STATE);

  const toggleWatched = (id) => {
    console.log("ID of movie to toggle - ", id);
    dispatcher({
      type: ACTIONS.TOGGLE_MOVIE_WATCHED_STATUS,
      payload: {
        id: id
      }
    });
  };

  const addMovie = (movie) => {
    console.log("This is the movie - ", movie);
    dispatcher({
      type: ACTIONS.ADD_MOVIE,
      payload: {
        ...movie
      }
    })
  };

  return (
    <div className="movie-app-container">
      <MovieInput addMovie={addMovie}/>
      <MovieDisplay movies={state.movies}
                    toggleWatched={toggleWatched}
      />
    </div>
  );
}

export default App;
