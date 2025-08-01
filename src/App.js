import React,{useState} from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {

  const [movies, setMovies] = useState([
 
  {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space.",
    posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    rating: 4.7,
  },
  {
    title: "Stranger Things",
    description: "A group of kids uncover supernatural mysteries in their town.",
    posterURL: "https://m.media-amazon.com/images/I/71Md5iLp2kL.jpg",
    rating: 4.6,
  },
  {
    title: "The Legend of Korra",
    description: "The Avatar struggles to keep balance in a world evolving rapidly with technology, politics, and spirit forces.",
    posterURL: "https://m.media-amazon.com/images/I/81xXAyK1o1L._AC_UF1000,1000_QL80_.jpg",
    rating: 4.5,
  },
  {
    title: "Don't Look Up",
    description: "Two astronomers try to warn the world about a deadly comet heading toward Earth — but no one listens.",
    posterURL: "https://m.media-amazon.com/images/I/71gKhXkRDdL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.2,
  }
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const addMovies = (newMovies) => {
    setMovies([...movies, ...newMovies]);

const filteredMovies = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) && movie.rating >= searchRating
    );
    setMovies(filteredMovies);

  }
  return (
    <div className="App">
    <h1>🎬 Movie App</h1>
    <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
    <MovieList movies={movies} />
    </div>
  );
}

export default App;
