import './App.css';
import MovieDisplay from './components/MovieDisplay';
import MovieInput from './components/MovieInput';
import UsersDisplay from './components/UsersDisplay';

function App() {
  return (
    <div className="movie-app-container">
      <MovieInput/>
      <MovieDisplay/>
      <UsersDisplay/>
    </div>
  );
}

export default App;
