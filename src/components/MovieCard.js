import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, description, posterURL, rating } = movie;

  return (
    <Link
    to={`/movies?${id}`}>
    
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
    </Link>
  );
};

export default MovieCard; 
