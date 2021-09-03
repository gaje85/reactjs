import {useContext, useState} from 'react';
import {MovieContext} from '../utils/StateUtils';

const initialFormState = {
  name: "",
  year: ""
};

function MovieInput() {
  const [movie, setMovie] = useState(initialFormState);
  const {addMovie} = useContext(MovieContext);

  const onChange = (e) => {
    if (e.target.name === "name") {
      setMovie(movie => {
        return {
          ...movie,
          name: e.target.value
        };
      });
    } else if (e.target.name === "year") {
      setMovie(movie => {
        return {
          ...movie,
          year: e.target.value
        };
      });
    }
  };

  const addMovieToList = () => {
    addMovie({
      name: movie.name,
      year: movie.year,
      watched: false
    });

    setMovie(initialFormState);
  };

  return (
    <div className="movie-input">
      <input type="text"
             placeholder="Movie Name"
             name="name"
             value={movie.name}
             onChange={onChange}
      />
      <input type="text"
             placeholder="Movie Year"
             value={movie.year}
             name="year"
             onChange={onChange}
      />
      <button onClick={addMovieToList}>
        Add to list
      </button>
    </div>
  );
}

export default MovieInput;
