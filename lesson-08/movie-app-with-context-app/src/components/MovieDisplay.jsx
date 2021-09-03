import './movie-styles.css';
import {useContext} from 'react';
import {MovieContext} from '../utils/StateUtils';

function MovieDisplay(props) {
  const {state} = useContext(MovieContext);
  return (
    <div className="display-container">
      {
        state.movies.map(movie => <Movie key={movie.id}
                                   movie={movie}
                                   toggleWatched={props.toggleWatched}
        />)
      }
    </div>
  );
}

export default MovieDisplay;

function Movie(props) {
  const {toggleWatched} = useContext(MovieContext);
  const onToggleWatched = () => {
    toggleWatched(props.movie.id);
  };

  return (
    <div className="movie">
      <h3>
        {
          props.movie.name
        }
      </h3>
      <h5>
        {
          props.movie.year
        }
      </h5>
      <h5>
        {
          props.movie.watched ? "Movie has been watched" : "Movie has not been watched"
        }
      </h5>
      <button onClick={onToggleWatched}>
        Toggle Watched
      </button>
    </div>
  );
}
