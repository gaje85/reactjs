import './movie-styles.css';
import {toggleMovieWatchedStatus} from '../utils/ReduxUtils';
import {useDispatch, useSelector} from 'react-redux';

function MovieDisplay() {
  const movies = useSelector((s) => s.movies);
  return (
    <div className="display-container">
      {
        movies.map(movie => <Movie key={movie.id}
                                   movie={movie}
        />)
      }
    </div>
  );
}

export default MovieDisplay;

function Movie(props) {
  const dispatcher = useDispatch();

  const onToggleWatched = () => {
    dispatcher(toggleMovieWatchedStatus({id: props.movie.id}));
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
