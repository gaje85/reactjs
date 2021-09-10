import './App.css';
import MovieDisplay from './components/MovieDisplay';
import MovieInput from './components/MovieInput';

function App() {
  return (
    <div className="movie-app-container">
      <MovieInput/>
      <MovieDisplay/>
    </div>
  );
}

export default App;
