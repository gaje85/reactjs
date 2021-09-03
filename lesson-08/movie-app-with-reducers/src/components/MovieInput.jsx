import {useState} from 'react';

const initialFormState = {
  name: "",
  year: ""
};

function MovieInput(props) {
  const [movie, setMovie] = useState(initialFormState);

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

  const addMovie = () => {
    props.addMovie({
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
      <button onClick={addMovie}>
        Add to list
      </button>
    </div>
  );
}

export default MovieInput;
