import React, {useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import {BrowserRouter as} from react-router-dom

const App = () => {
  const [movies, setMovies] = useState([
 
  {
    id: 1,
    title: "The Rookie",
    description: "A team of explorers travel through a wormhole in space.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMzc2MDdkZDUtZjZlYy00MGMyLWJkNzUtMTMxY2FkZjZjYmEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.7,
    trailer: "https://www.youtube.com/embed/8BPlx6eK1vc"
  },
  {
    id: 2,
    title: "Inside Job",
    description: "A group of kids uncover supernatural mysteries in their town.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BZjJkMjhhNzctNjMxOS00M2Y1LWFiMmMtZjQ5ZjllM2UxYjAzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.6,
    trailer: "https://www.youtube.com/embed/-aZBIpZY_Fw"
  },
  {
    id: 3,
    title: "The Legend of Korra",
    description: "The Avatar struggles to keep balance in a world evolving rapidly with technology, politics, and spirit forces.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMWIyMDNmMGMtZTRjZi00ZWJkLWE2ZjAtMjYwOGFiZGVkZmYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.5,
    trailer: "https://www.youtube.com/embed/54srZLuYfb0"
  },
  {
    id: 4,
    title: "Don't Look Up",
    description: "Two astronomers try to warn the world about a deadly comet heading toward Earth — but no one listens.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjhhNWFjNzctYTJjOS00MDc0LThiNjItZmM0ZDVmMWViY2UzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.2,
    trailer: "https://www.youtube.com/embed/RbIxYm3mKzI"
  }
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");


  const filteredMovies = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) && movie.rating >= searchRating
    );
  
  return (
    <div className="App">
    <h1>🎬 Movie App</h1>
    <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
    <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
